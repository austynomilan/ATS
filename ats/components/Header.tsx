import Link from 'next/link';
import { ModeToggle } from './theme-toggle';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className='bg-blue-800 h-16 flex justify-between content-center pl-24 pr-5'>
      <Link href='/' className='text-5xl font-bold text-white pt-2'>
        <h1 className='drop-shadow-2xl'>R</h1>
      </Link>

      <div className='flex justify-center content-center pt-3'>
        <Button variant='outline' className='mr-2'>
          Button
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
