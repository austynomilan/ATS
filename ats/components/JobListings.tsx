import Image from 'next/image';
import data from '../data.json';
import { Button } from '@/components/ui/button';
import {
  ExternalLinkIcon,
  RocketIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';

function JobListings() {
  return (
    <div>
      <h1>Job Listings</h1>
      {data.industries.map((industry) => (
        <div key={industry.name}>
          {industry.categories.map((category) => (
            <div key={category.name}>
              {category.jobs.map((job) => (
                <div key={job.id} className='flex mb-3 h-24'>
                  <Image
                    src={job.company_logo}
                    height={20}
                    width={60}
                    alt={job.company}
                    className='ml-3 -mt-12 object-contain'
                  />
                  <div className='flex justify-between relative'>
                    <div className='text-sm pl-5'>
                      <h2 className='text-[#6662f5] text-base font-bold cursor-pointer hover:underline'>
                        {job.title}
                      </h2>
                      <p>{job.company}</p>
                      <p>{job.location}</p>
                    </div>
                    <ExternalLinkIcon className='absolute left-96' />
                    <Button
                      variant={'ghost'}
                      className='mb-3 absolute left-[20.8rem] top-10 text-[10px]'
                    >
                      Apply
                      <RocketIcon className='ml-2 h-3 w-3' />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default JobListings;
