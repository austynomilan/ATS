'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { ModeToggle } from './theme-toggle';
import { Button } from './ui/button';

export default function Header() {
  const { user, error, isLoading } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  const Hamburger = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='w-10 h-10'
    >
      <path
        fill-rule='evenodd'
        d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
        clip-rule='evenodd'
      />
    </svg>
  );
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className='h-20 bg-[#635dff] sticky inset-x-0 top-0 z-50 flex justify-between items-center'>
      <div className='flex items-center'>
        <Link href='/' className='text-5xl font-bold text-white pl-5'>
          R
        </Link>
      </div>

      <div className='hidden md:block'>
        <div className='flex items-center pr-5'>
          <ul className='text-center font-bold flex text-white'>
            <li className='mr-10'>
              <Link href='/jobBoard'>Job Board</Link>
            </li>
            <li className='mr-10'>Pricing</li>
            <li className='mr-10'>Blog</li>
          </ul>
          <div className='flex items-center justify-center'>
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
      </div>
      {/* mobile view */}
      <div
        className={`absolute h-[100vh] bg-[#635dff] w-full top-20 transition ease-in-out delay-3000  ${
          showMenu ? '' : 'hidden'
        }`}
      >
        <div>
          <ul className='text-center text-3xl mt-36 font-bold'>
            <li className='mb-10'>
              <Link href='/'>Job Board</Link>
            </li>
            <li className='mb-10'>Pricing</li>
            <li className='mb-10'>Blog</li>
          </ul>
        </div>

        <div className='flex items-center justify-center'>
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
      <div onClick={toggleMenu} className='text-white text-3xl md:hidden mr-5'>
        {!showMenu ? (
          Hamburger
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-12 h-12'
          >
            <path
              fill-rule='evenodd'
              d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
              clip-rule='evenodd'
            />
          </svg>
        )}
      </div>
    </header>
  );
}
