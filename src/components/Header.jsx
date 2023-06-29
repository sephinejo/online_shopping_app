import React from 'react';
import { LuStore } from 'react-icons/lu';
import { MdOutlineCreate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex text-4xl text-brand font-logo items-center'>
        <LuStore />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-nav'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/cart'>Cart</Link>}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-xl'>
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
