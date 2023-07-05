import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className='bg-gray-50 px-20 max-h-32 py-8 rounded-md text-center text-md sm:text-lg'>
      <p>{text}</p>
      <p className='text-rose-500 font-semibold mt-1'>${price}</p>
    </div>
  );
}
