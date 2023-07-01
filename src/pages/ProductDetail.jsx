import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { useLocation } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const [success, setSuccess] = useState();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: {
        id,
        image,
        title,
        category,
        description,
        colors,
        sizes,
        materials,
        price,
      },
    },
  } = useLocation();
  const [size, setSize] = useState(sizes && sizes[0]);
  const [color, setColor] = useState(colors && colors[0]);

  const sizeHandler = (e) => setSize(e.target.value);
  const colorHandler = (e) => setColor(e.target.value);
  const clickHandler = () => {
    const product = {
      id,
      image,
      title,
      price,
      size,
      color,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('Item is successfully added!');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <section className='p-5 flex flex-col md:flex-row'>
      <div className='w-full md:basis-7/12'>
        <img src={image} alt={title} />
      </div>
      <div className='w-full px-2 sm:px-5 md:pl-8 md:basis-5/12 flex flex-col'>
        <p className='capitalize my-2 text-sm text-slate-400'>{category}</p>
        <h2 className='text-2xl font-bold py-2 border-b border-gray-300'>
          {title}
        </h2>
        <p className='py-1 text-xl'>${price}</p>
        <div className='mt-4'>
          <label htmlFor='color'>Colors:</label>
          <select
            className='mx-2 px-2 border-2 border-dashed border-stone-300 outline-none'
            id='color'
            onChange={colorHandler}
            value={color}
          >
            {colors &&
              colors.map((color, idx) => <option key={idx}>{color}</option>)}
          </select>
        </div>
        <div className='my-3'>
          <label htmlFor='size'>Sizes:</label>
          <select
            className='mx-2 px-2 border-2 border-dashed border-stone-300 outline-none'
            id='size'
            onChange={sizeHandler}
            value={size}
          >
            {sizes &&
              sizes.map((size, idx) => <option key={idx}>{size}</option>)}
          </select>
        </div>
        <p className='text-sm mt-4'>Description: {description}</p>
        <p className='text-sm mt-2 mb-7'>Materials: {materials}</p>
        {success && <p className='mb-3 text-md'>{success}</p>}
        <Button text='Add To Cart' onClick={clickHandler} />
      </div>
    </section>
  );
}
