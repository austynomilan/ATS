import React from 'react';
import { Button } from './ui/button';

interface JobApplicationFormProps {
  onClose: () => void;
  company: string;
  title: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  onClose,
  company,
  title,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='m-auto'>
      <div className='text-sm text-gray-400 flex'>
        <h2 className='mr-1'>{title}</h2>
        <p>role at {company}</p>
      </div>
      
      {/* Add form fields for applying */}
      <Button onClick={onClose}>Close</Button>
    </form>
  );
};

export default JobApplicationForm;
