import React from 'react';

export default function Banner() {
  return (
    <section className='bg-slate-300 relative'>
      <div className='bg-banner bg-cover bg-center bg-no-repeat h-64 sm:h-80 relative opacity-90'></div>
      <div className='absolute w-full top-12 sm:top-32 text-center text-white'>
        <h2 className='text-3xl mx-5'>
          Discover 100+ styles for the season ahead.
        </h2>
        <p className='text-lg mt-3'>Contemporary Style</p>
      </div>
    </section>
  );
}
