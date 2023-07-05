import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { BsPlus } from 'react-icons/bs';
import { LuEqual } from 'react-icons/lu';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 5.99;
export default function Cart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    hasProducts &&
    products.reduce(
      (prev, curr) => prev + parseInt(curr.price) * parseInt(curr.quantity),
      0
    );

  return (
    <section className='m-3'>
      <p className='mb-2'>Your Cart</p>
      {!hasProducts && <p>No items added</p>}
      {hasProducts && (
        <div className='flex flex-col'>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <span className='w-full border-b border-b-gray-300 mt-3'></span>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center my-5'>
            <PriceCard text='Total price' price={totalPrice} />
            <BsPlus className='mx-auto shrink-0' />
            <PriceCard text='Shipping fee' price={SHIPPING} />
            <LuEqual className='mx-auto shrink-0' />
            <PriceCard text='Subtotal' price={totalPrice + SHIPPING} />
          </div>
          <Button text='Continue To Checkout' />
        </div>
      )}
    </section>
  );
}
