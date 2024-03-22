import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();
  if (session?.user) {
    redirect('/dashboard');
  }
 
  return (
    <main className='flex flex-col  justify-between'>
      <h1 className='text-6xl font-bold pl-24 pt-10'>
        Free <br />
        Recruitment <br />
        Software
      </h1>

      <h2 className='pl-24 pt-5'>
        A free zone for job seeker to get quality job and a recruitment software
        for <br />
        recruiters.
      </h2>
    </main>
  );
}
