import { SearchInput } from './components';
import { Details } from './components/Details/Details';
import { Stats } from './components/Stats/Stats';
import { UserInfo } from './components/UserInfo';

const App = () => {
  return (
    <main className='flex h-screen justify-center  bg-very-dark-blue p-8 font-source-sans-pro md:items-center'>
      <div className='flex w-full max-w-3xl flex-col gap-5'>
        <h1 className='text-2xl font-bold text-slate-50 md:text-3xl lg:text-4xl'>
          DevFinder
        </h1>
        <SearchInput />
        <div className='items-start gap-10 space-y-8 rounded-xl bg-dark-blue p-8 md:flex md:space-y-0'>
          <div className='flex items-center gap-4'>
            {/* <img src="" alt="" /> */}
            <div className='h-16 w-16 rounded-full bg-white md:h-24 md:w-24 lg:h-28 lg:w-28'></div>
            <UserInfo
              className='flex flex-col md:hidden'
              githubUrl='#'
              login='octo'
              name='Oussama'
            />
          </div>
          <div className='w-full space-y-8'>
            <UserInfo
              className='hidden flex-col md:flex'
              githubUrl='#'
              login='octo'
              name='Oussama'
            />
            <p className='font-semibold text-slate-50'>
              The profile has no bio
            </p>
            <Stats reposCount={8} followersCount={555} followingCount={16} />
            <Details />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
