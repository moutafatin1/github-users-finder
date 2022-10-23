import { SearchInput } from './components';

const App = () => {
  return (
    <main className='flex h-screen  justify-center bg-very-dark-blue p-8'>
      <div className='flex w-full flex-col gap-5'>
        <h1 className='text-2xl font-bold text-slate-50'>DevFinder</h1>
        <SearchInput />
      </div>
    </main>
  );
};

export default App;
