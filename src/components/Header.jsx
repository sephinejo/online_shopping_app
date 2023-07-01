import React from 'react';
import { LuStore } from 'react-icons/lu';
import { MdOutlineCreate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 px-2 py-4'>
      <Link
        to='/'
        className='flex text-3xl sm:text-4xl text-brand font-logo items-center'
      >
        <LuStore />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-2 text-sm sm:text-base sm:gap-4 font-nav'>
        <Link to='/products'>Products</Link>
        {user && (
          <Link to='/cart'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-xl sm:text-2xl'>
            <MdOutlineCreate />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text='Sign In' onClick={login} />}
        {user && <Button text='Sign Out' onClick={logout} />}
      </nav>
    </header>
  );
}
