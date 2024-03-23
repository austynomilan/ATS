import Footer from '@/components/Footer';
import Section1 from '@/components/Section1';
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
      fill='green'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='green'
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
    <main className='flex flex-col justify-between mt-20'>
      <div className='relative h-full'>
        <div className='flex text-black dark:text-white'>
          <div className='pl-52 pt-20'>
            <h1 className='text-6xl font-bold'>
              Free <br />
              Recruitment <br />
              Software
            </h1>
            <h2 className='pt-10'>
              A free zone for job seeker to get quality job and a recruitment
              <br />
              software for recruiters.
            </h2>
            <a href='/api/auth/login'>
              <Button
                variant='outline'
                className='w-60 mt-5 mb-6 border-2 border-[#6662f5] dark:border-white text-[#6662f5] font-semibold hover:bg-[#6662f5] hover:text-white'
              >
                Sign Up For Free
              </Button>
            </a>

            <p className='absolute bottom-40 text-white'>
              Read our review on Trust Pilot.
            </p>
            <div className='flex mt-10 mb-28 relative'>
              <Image
                src='https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg'
                height={200}
                width={150}
                alt='trustpilot logo'
              />
              <div className='flex absolute top-3 left-40'>
                {STAR}
                {STAR}
                {STAR}
                {STAR}
              </div>
            </div>
          </div>
          <div className=''>
            <Image
              src='https://media.istockphoto.com/id/1065072428/photo/man-in-suit-and-tie-give-hand-as-hello-in-office.jpg?s=1024x1024&w=is&k=20&c=iK1fJp2cpEhutQxReEV2553V6Dh1iLw_yn-CR525dsY='
              height={400}
              width={400}
              alt='recruitment'
              className='rounded-full absolute top-24 right-24'
            />
          </div>
        </div>
        <div className='-mt-72'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#6662f5'
              fill-opacity='1'
              d='M0,0L30,16C60,32,120,64,180,85.3C240,107,300,117,360,112C420,107,480,85,540,101.3C600,117,660,171,720,186.7C780,203,840,181,900,144C960,107,1020,53,1080,37.3C1140,21,1200,43,1260,80C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>

      <Section1 />
      <Footer />
    </main>
  );
}
