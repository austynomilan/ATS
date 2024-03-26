import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <main className='bg-gray-200 h-screen flex flex-col md:flex-row'>
      <div className='h-auto'>
        <ul>
          <li className='flex'>
            <Image src='/save.svg' height={50} width={20} alt='...' />
            <p>My Jobs</p>
          </li>
          <li className='flex'>
            <Image src='/paper.svg' height={50} width={20} alt='...' />
            <p>Interview Prep</p>
          </li>
          <li className='flex'>
            <Image src='/list.svg' height={50} width={20} alt='...' />
            <p>Preferences</p>
          </li>
          <li className='flex'>
            <Image src='/settings.svg' height={50} width={20} alt='...' />
            <p>Application Settings</p>
          </li>
        </ul>
        <Button>
          <Pencil2Icon className='mr-2 h-4 w-4' /> Post a Job for free
        </Button>
      </div>

      <div></div>
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
