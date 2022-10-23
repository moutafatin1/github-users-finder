import { FiSearch } from 'react-icons/fi';

export const SearchInput = () => {
  return (
    <div className='relative w-full'>
      <input
        type='text'
        className='w-full rounded-xl border-none bg-dark-blue px-10 py-4 font-bold text-slate-50 hover:bg-dark-blue/70 focus:border-primary'
        placeholder='Search for github user'
      />
      <FiSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-2xl text-primary' />
      <button className='absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-primary px-6 py-3 font-bold text-slate-50'>
        Search
      </button>
    </div>
  );
};
