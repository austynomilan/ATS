import React, { useState } from 'react';
import { PaperPlaneIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import JobApplicationForm from './JobApplicationForm';
import Modal from 'react-modal';
import Image from 'next/image';
import { Button } from './ui/button';
import { Job } from './types';

interface JobModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  job: Job | null;
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onRequestClose, job }) => {
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyNow = () => {
    setIsApplying(true);
  };

  const handleCloseForm = () => {
    setIsApplying(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='absolute top-20 w-full text-center'
    >
      {job && (
        <div className='relative md:flex md:justify-between bg-white w-3/4 md:w-2/4 m-auto mt-20 pt-5 pb-5 md:h-auto h-auto rounded-lg shadow-2xl'>
          <CrossCircledIcon
            onClick={() => {
              onRequestClose();
              setIsApplying(false);
            }}
            className='hover:text-red-600 w-6 h-6 float-right -mt-5 mr-2 md:absolute md:right-0 md:top-8'
          />
          {!isApplying && (
            <Button
              className='mb-3 absolute bottom-2 right-2'
              onClick={handleApplyNow}
            >
              Apply now
              <PaperPlaneIcon className='h-4 w-4 ml-3' />
            </Button>
          )}
          {isApplying ? (
            <JobApplicationForm
            onClose={handleCloseForm}
            company={job.company}
            title={job.title}
          />
          ) : (
            <>
              {!isApplying && (
                <>
                  <div>
                    <Image
                      src={job.company_logo}
                      width={200}
                      height={200}
                      alt={job.company}
                      className='m-auto md:h-72 md:w-72 md:m-5 shadow-2xl rounded-lg'
                    />
                  </div>
                  <div className='md:w-1/2 md:mr-8'>
                    <h2 className='font-bold text-left mt-5 pl-3'>
                      {job.title}
                    </h2>
                    <p className='text-sm text-left text-gray-400 pl-3'>
                      {job.company}
                    </p>
                    <div className='flex justify-between p-3'>
                      <p>{job.location}</p>
                      <p className='text-green-800 font-bold text-sm md:text-base'>
                        {job.salary}
                      </p>
                    </div>
                    <p>{job.description}</p>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </Modal>
  );
};

export default JobModal;
