import React from 'react';
import { BiCart } from 'react-icons/bi';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className='relative'>
      <BiCart className='text-2xl' />
      {products && (
        <p className='w-4 h-4 text-center text-xs bg-brand text-white font-semibold rounded-full absolute -top-1 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
