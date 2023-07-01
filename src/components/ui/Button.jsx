import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand py-2 px-1 sm:py-2 sm:px-3 rounded-sm hover:brightness-105 text-sm sm:text-base text-white'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
