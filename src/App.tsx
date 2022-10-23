import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchInput } from './components';
import { Details } from './components/Details/Details';
import { LoadingPuff } from './components/LoadingPuff';
import { Stats } from './components/Stats/Stats';
import { UserInfo } from './components/UserInfo';
import { GithubUser } from './types';

const App = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const username = searchParams.get('username');

  const { data, isError, isFetching, isLoading, error, refetch } = useQuery(
    ['getUser'],
    async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      return (await response.json()) as GithubUser;
    }
  );
  useEffect(() => {
    refetch();
  }, [username, refetch]);

  if (isError) {
    return <p>error</p>;
  }

  return (
    <main className='flex h-screen justify-center  bg-very-dark-blue p-8 font-source-sans-pro md:items-center'>
      <div className='flex w-full max-w-3xl flex-col gap-5'>
        <h1 className='text-2xl font-bold text-slate-50 md:text-3xl lg:text-4xl'>
          DevFinder
        </h1>
        <SearchInput />

        <div className='items-start gap-10 space-y-8 rounded-xl bg-dark-blue p-8 md:flex md:space-y-0'>
          {isFetching || isLoading ? (
            <span className='flex items-center justify-center'>
              <LoadingPuff />
            </span>
          ) : (
            <>
              <div className='flex items-center gap-4'>
                <img
                  src={data.avatar_url}
                  alt='Avatar'
                  className='h-40 w-40  rounded-full md:h-52 md:w-72'
                />

                <UserInfo
                  className='flex  flex-col md:hidden'
                  githubUrl={data.url}
                  login={data.login}
                  name={data.name}
                />
              </div>
              <div className='w-full space-y-8'>
                <UserInfo
                  className='hidden flex-col md:flex'
                  githubUrl={data.url}
                  login={data.login}
                  name={data.name}
                />
                <p className='font-semibold text-slate-50'>
                  The profile has no bio
                </p>
                <Stats
                  reposCount={data.public_repos}
                  followersCount={data.followers}
                  followingCount={data.following}
                />
                <Details
                  location={data.location}
                  twitterUrl={data.twitter_username}
                  website={data.blog}
                  workingAt={data.company}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
