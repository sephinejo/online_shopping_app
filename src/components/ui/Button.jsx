import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand py-1 px-3 rounded-sm hover:brightness-105 text-md text-white'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
