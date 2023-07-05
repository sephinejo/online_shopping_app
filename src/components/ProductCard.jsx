import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, colors, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className='shadow-sm overflow-hidden cursor-pointer flex flex-col mt-5'
    >
      <img
        className='w-full h-full transition-all hover:scale-105'
        src={image}
        alt={title}
      />
      <div className='mt-2 p-2 text-lg flex justify-between items-center'>
        <h3 className='whitespace-break-spaces'>{title}</h3>
        <p>${price}</p>
      </div>
      <p className='px-2 py-2 text-sm text-neutral-500 truncate'>{colors}</p>
    </li>
  );
}
