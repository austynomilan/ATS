// types.ts
export type Job = {
    id: string;
    title: string;
    company: string;
    company_logo: string;
    location: string;
    salary: string;
    description: string;
    requirements: string[];
  };
  
  export type Category = {
    name: string;
    jobs: Job[];
  };
  
  export type Industry = {
    name: string;
    categories: Category[];
  };
  
  export type Data = {
    industries: Industry[];
  };
  