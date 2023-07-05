import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { GoTrash } from 'react-icons/go';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-red-600 hover:scale-110 mx-1 sm:mx-3';

export default function CartItem({
  product,
  product: { id, image, title, size, color, quantity, price },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const minusHandler = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const plusHandler = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const removeHandler = () => removeItem.mutate(id);

  return (
    <li className='flex justify-between items-center mb-2'>
      <img className='w-40 sm:w-72 mr-3' src={image} alt={title} />
      <div className='flex-1 flex justify-between'>
        <div className='basis-3/5'>
          <p className='font-semibold'>{title}</p>
          <p className='text-rose-500'>{size}</p>
          <p>{color}</p>
          <p>${price}</p>
        </div>
        <div className='text-md sm:text-lg flex items-center'>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={minusHandler} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={plusHandler} />
          <GoTrash className={ICON_CLASS} onClick={removeHandler} />
        </div>
      </div>
    </li>
  );
}
