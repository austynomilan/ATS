import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Prefer from '@/components/Prefer';
import JobListings from '@/components/JobListings';

import Image from 'next/image';
import Link from 'next/link';


function page() {
  return (
    <main className='bg-gray-200 h-screen flex flex-col md:flex-row m-auto'>
      <div className='bg-white md:h-1/3 rounded-lg md:px-5 flex flex-col items-center mx-1 my-3'>
        <ul className='mb-12 text-sm md:text-base flex md:flex-col'>
          <li className='flex flex-col md:flex-row items-center pt-5'>
            <Image src='/save.svg' height={60} width={25} alt='...' />
            <p className='pl-2'>My Jobs</p>
          </li>
          <li className='flex flex-col items-center md:flex-row pt-5'>
            <Image src='/paper.svg' height={60} width={25} alt='...' />
            <p className='pl-2'>Interview Prep</p>
          </li>
          <li className='flex cursor-pointer'>
            <Prefer />
          </li>
          <li className='flex flex-col items-center md:flex-row pt-5'>
            <Image src='/settings.svg' height={60} width={25} alt='...' />
            <p className='pl-2'>Application Settings</p>
          </li>
        </ul>
        <Button className='mb-3'>
          <Pencil2Icon className='mr-2 h-4 w-4' /> Post a Job for free
        </Button>
      </div>

      <div className='h-auto'>
        <JobListings />
      </div>
      <div className=''>
        <h2>Job Seeker guidance</h2>
        <p>recommended based your activity</p>
        <Link href='/'>
          <h3>I want to improve my resume</h3>
        </Link>
      </div>
    </main>
  );
}

export default page;
