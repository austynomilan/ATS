// enter your javascript code here
'use client'

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
    <header className='bg-blue-800 h-16 flex justify-between content-center pl-24 pr-5'>
      <Link href='/' className='text-5xl font-bold text-white pt-2'>
        <h1 className='drop-shadow-2xl'>R</h1>
      </Link>/

      <div className='flex justify-center content-center pt-3'>
        {!isLoading && isAuthenticated ? (
          <a href='api/auth/logout'>
            <Button variant='outline' className='mr-2'>
              Logout
            </Button>
          </a>
        ) : (
          <a href='/api/auth/login'>
            <Button variant='outline' className='mr-2'>
              Sign In
            </Button>
          </a>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
