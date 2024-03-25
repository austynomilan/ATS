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
      stroke='light green'
      className='w-4 h-4'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
      />
    </svg>
  );

  return (
    <main className='mt-20 relative md:mt-10'>
      <div className='h-full'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between md:px-52 md:-mb-36 md:text-left text-center content-center'>
          <div>
            <h1 className='text-6xl font-bold pt-16 md:pt-8'>
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
                className='w-60 mt-20 mb-24 border-2 border-[#6662f5] dark:border-white text-[#6662f5] font-semibold hover:bg-[#6662f5] hover:text-white'
              >
                Sign Up For Free
              </Button>
            </a>
          </div>

          <div className='mt-20'>
            <Image
              src='https://media.istockphoto.com/id/1065072428/photo/man-in-suit-and-tie-give-hand-as-hello-in-office.jpg?s=1024x1024&w=is&k=20&c=iK1fJp2cpEhutQxReEV2553V6Dh1iLw_yn-CR525dsY='
              height={400}
              width={400}
              alt='recruitment'
              className='rounded-full hidden md:inline'
            />
          </div>
        </div>

        {/* rating on trust pilot */}
        <div className="bg-[url('/curve.svg')] bg-no-repeat bg-cover w-full pt-10 md:pt-56">
          <p className='text-[12px] text-white font-semibold md:text-base md:-mt-28 md:pl-52'>
            Read our review on Trust Pilot.
          </p>
          <div>
            <div className='flex md:pl-52'>
              <Image
                src='https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg'
                height={150}
                width={100}
                alt='trustpilot logo'
                // className='absolute left-5 top-[631px]'
              />
              <div className='flex mt-3'>
                {/* top-[640px] left-36 */}
                {STAR}
                {STAR}
                {STAR}
                {STAR}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section1 />
      <Footer />
    </main>
  );
}
