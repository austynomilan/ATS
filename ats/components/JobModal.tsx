import React from 'react';
import Modal from 'react-modal';
import { Job } from './types';

interface JobModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  job: Job | null;
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onRequestClose, job }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='absolute top-20 w-full text-center'
    >
      {job && (
        <div className='bg-white w-3/4 m-auto pt-5'>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          {/* Add more job details here */}
        </div>
      )}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default JobModal;
