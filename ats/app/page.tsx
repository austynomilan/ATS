import { Button } from '@/components/ui/button';
import { getSession } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();
  if (session?.user) {
    redirect('/dashboard');
  }

  const STAR = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
      />
    </svg>
  );

  return (
    <main className='flex flex-col h-full justify-between bg-[#5f5afd]'>
      <h1 className='text-6xl font-bold pl-52 pt-20'>
        Free <br />
        Recruitment <br />
        Software
      </h1>

      <h2 className='pl-52 pt-10'>
        A free zone for job seeker to get quality job and a recruitment software
        for <br />
        recruiters.
      </h2>
      <Button variant='outline' className='w-60 ml-52 mt-5 mb-6'>
        Sign Up For Free
      </Button>
      <p className='ml-52'>Read our review on Trust Pilot.</p>
      <div className='flex ml-52 mt-10 mb-28'>
        <Image
          src='https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg'
          height={200}
          width={150}
          alt='trustpilot logo'
        />
        {STAR}
        {STAR}
        {STAR}
        {STAR}
      </div>
    </main>
  );
}
