import Image from 'next/image';
import { Button } from './ui/button';

function Footer() {
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

  const check = (
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
        d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
      />
    </svg>
  );
  return (
    <div className='bg-[#6662f5] h-full flex flex-col items-center justify-center'>
      <div className='w-1/2 text-center'>
        <h1 className='font-bold text-5xl text-white pt-20'>R</h1>
        <h2 className='font-bold text-4xl mt-20 text-white'>
          &ldquo;The Next Big Recruiting Software&rdquo;
        </h2>
        <h3 className='text-white text-right text-sm mr-10'>
          Read This Review On Trustpilot
        </h3>
      </div>
      <div className='flex mt-20 mb-20 text-white'>
        <div className='mr-5'>
          <div className='flex items-center'>
            <Image
              src='https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg'
              height={200}
              width={150}
              alt='trustpilot logo'
            />
            <div className='flex mt-3'>
              {STAR}
              {STAR}
              {STAR}
              {STAR}
            </div>
          </div>
          <Button
            variant='outline'
            className='w-60 mt-5 mb-6 border-2 p-7 border-[#6662f5] dark:border-white text-[#6662f5] font-semibold hover:bg-[#6662f5] hover:text-white hover:border-white'
          >
            Sign Up For Free
          </Button>
          <ul>
            <li>- No Trial Period</li>
            <li>- No Credit Card Required</li>
            <li>- No Risk</li>
          </ul>
        </div>
        <div className='mt-4'>
          <ul>
            <li className='flex'>
              {check} <p className='ml-2 mb-5'>Free ATS</p>
            </li>
            <li className='flex'>
              {check} <p className='ml-2 mb-5'>Free CRM</p>
            </li>
            <li className='flex'>
              {check} <p className='ml-2 mb-5'>Free Website Builder</p>
            </li>
            <li className='flex'>
              {check} <p className='ml-2 mb-5'>Free Job Board</p>
            </li>
            <li className='flex'>
              {check} <p className='ml-2 '>Free AI Tools</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
