import { getSession } from '@auth0/nextjs-auth0';

async function Dashboard() {
  const session = await getSession();
  return (
    <div className='mt-20'>
      {session?.user && 
        <div>
          <p>Email: {session.user.email}</p> {/* Display user email */}
        </div>
      }
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
