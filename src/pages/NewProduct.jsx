import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import useProducts from '../hooks/useProducts';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(image)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              window.scrollTo(0, 0);
              setSuccess(`${product.title} was successfully uploaded.`);
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  const changeHandler = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setImage(files && files[0]);
      return;
    }
    setProduct((prev) => ({ ...product, [name]: value }));
  };

  return (
    <div className='w-full text-center'>
      <h2 className=' text-xl mt-8 sm:text-3xl sm:mt-10 sm:mb-5'>
        Add New Product
      </h2>
      {success && <p>✅ {success}</p>}
      {image && (
        <img
          className='w-8/12 sm:w-96 mx-auto mt-5 sm:mt-8'
          src={URL.createObjectURL(image)}
          alt='local file'
        />
      )}

      <form
        onSubmit={submitHandler}
        className='flex flex-col text-center px-8 mt-7 sm:mt-10 mx-auto'
      >
        <input
          type='file'
          accept='image/*'
          name='file'
          onChange={changeHandler}
          required
        />

        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          onChange={changeHandler}
          placeholder='Name'
          required
        />

        <select
          style={{ color: '#9CA3AF' }}
          name='category'
          value={product.category ?? ''}
          onChange={changeHandler}
          required
        >
          <option value=''>Category - Choose an option</option>
          <option value='top'>Top</option>
          <option value='bottom'>Bottom</option>
          <option value='dress'>Dress</option>
          <option value='outer'>Outer</option>
          <option value='shoes'>Shoes</option>
          <option value='accessories'>Accessories</option>
        </select>

        <input
          type='text'
          name='colors'
          value={product.colors ?? ''}
          onChange={changeHandler}
          placeholder='Colors - Separate with comma(,)'
          required
        />

        <input
          type='text'
          name='sizes'
          value={product.sizes ?? ''}
          onChange={changeHandler}
          placeholder='Sizes - Separate with comma(,)'
          required
        />

        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          onChange={changeHandler}
          placeholder='Description'
          required
        />

        <input
          type='text'
          name='materials'
          value={product.materials ?? ''}
          onChange={changeHandler}
          placeholder='Materials'
          required
        />

        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='Price'
          onChange={changeHandler}
          min={1}
          required
          className='mb-3'
        />

        <Button
          text={isUploading ? 'Uploading...' : 'Submit'}
          disabled={isUploading}
        />
      </form>
    </div>
  );
}
