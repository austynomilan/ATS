'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { ModeToggle } from './theme-toggle';
import { Button } from './ui/button';

export default function Header() {
  const { user, error, isLoading } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  return (
    <header className=' bg-[#635dff] h-16 flex justify-between content-center pl-52 pr-5 fixed inset-x-0 top-0 z-50'>
      <Link href='/' className='text-5xl font-bold text-white pt-2'>
        <h1 className='drop-shadow-2xl'>R</h1>
      </Link>
      <div className='flex justify-center content-center'>
        <div className='mr-48'>
          <ul className='flex font-bold text-white pt-5'>
            <li className='pr-10'>
              <Link href='/'>Job Board</Link>
            </li>
            <li className='pr-10'>Pricing</li>
            <li className='pr-10'>Blog</li>
          </ul>
        </div>
        <div className='flex justify-center content-center pt-2'>
          {!isLoading && isAuthenticated ? (
            <a href='api/auth/logout'>
              <Button variant='outline' className='mr-2 bg-white'>
                Logout
              </Button>
            </a>
          ) : (
            <a href='/api/auth/login'>
              <Button
                variant='outline'
                className='mr-2 h-12 w-34 p-4 bg-white text-black border-2 border-[#635dff] hover:bg-[#635dff] hover:border-white'
              >
                Sign In
              </Button>
            </a>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
