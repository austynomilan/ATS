import data from '../data.json'
import { Data } from './types';

function JobListings() {
    const industries = data?.industries;
  
    return (
      <div>
        <h1>Job Listings</h1>
        {/* Render job listings using the data */}
      </div>
    );
  }
  
  export default JobListings;