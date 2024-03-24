import Image from 'next/image';
import { Button } from './ui/button';

function Section1() {
  return (
    <>
      <div className=''>
        <div className='mt-40 ml-52 mr-20 flex flex-col items-center'>
          <Image
            src='https://media.istockphoto.com/id/1065072428/photo/man-in-suit-and-tie-give-hand-as-hello-in-office.jpg?s=1024x1024&w=is&k=20&c=iK1fJp2cpEhutQxReEV2553V6Dh1iLw_yn-CR525dsY='
            height={250}
            width={250}
            alt='recruitment'
          />
          <a href='/api/auth/login'>
            <Button className='bg-white mt-10 text-[#6662f5] border-2 border-[#6662f5] hover:bg-[#6662f5] hover:text-white'>
              Sign Up For Free
            </Button>
          </a>
        </div>
        <div className='pt-10'>
          <h1 className='font-bold text-4xl'>
            Free All-In-One Recruitment Software
          </h1>
          <p>
            Recruit all-in-one platform gives you all the tools you need, in one
            place to grow a successful <br /> recruitment business!
          </p>
          <div className='flex w-11/12 pl-5 items-center'>
            <div className='flex justify-center items-center h-20 w-24 mr-10 rounded-full bg-[#6662f5] text-white mb-5 mt-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-12 h-12'
              >
                <path
                  fill-rule='evenodd'
                  d='M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z'
                  clip-rule='evenodd'
                />
                <path d='m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z' />
                <path
                  fill-rule='evenodd'
                  d='m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
            <div>
              <h2 className='font-bold'>ALL THE TOOLS ONE PLATFORM</h2>
              <p className='text-gray-400 text-base'>
                By creating a FREE account you get access to: A Website Builder,
                CRM, ATS, Job Board & AI Recruitment Software.
              </p>
            </div>
          </div>
          <div className='flex w-11/12 pl-5 items-center'>
            <div className='text-white flex justify-center items-center h-20 w-20 mr-10 rounded-full bg-[#6662f5] mb-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-12 h-12'
              >
                <path d='M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z' />
                <path
                  fillRule='evenodd'
                  d='M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div>
              <h2 className='font-bold'>NO TRIAL PERIOD</h2>
              <p className='text-gray-400 text-base'>
                You can use the <strong>Free Forever</strong> platform for as
                long as you need to!
              </p>
            </div>
          </div>
          <div className='flex w-11/12 pl-5 items-center'>
            <div className='text-white flex justify-center items-center h-20 w-20 mr-10 rounded-full bg-[#6662f5]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-12 h-12'
              >
                <path d='M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z' />
                <path
                  fill-rule='evenodd'
                  d='M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
            <div>
              <h2 className='font-bold'>NO CREDIT CARD REQUIRED</h2>
              <p className='text-gray-400 text-base'>
                Sign up for the <strong>Free Forever</strong> platform without
                providing credit card details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-center mt-16'>
        <h3 className='font-bold text-2xl'>What is included?</h3>
        <p className='text-sm text-gray-400 mt-5 mb-7'>
          Open your FREE account today to gain access to the following tools!
        </p>
      </div>
    </>
  );
}

export default Section1;
