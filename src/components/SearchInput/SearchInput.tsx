import { FiSearch } from 'react-icons/fi';

export const SearchInput = () => {
  return (
    <div className='group relative w-full'>
      <input
        type='text'
        className='w-full rounded-xl border-none bg-dark-blue px-10 py-6 pl-14 font-bold text-slate-50 focus:border-primary group-hover:bg-dark-blue/70'
        placeholder='Search for github user'
      />
      <FiSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-3xl text-primary' />
      <button className='absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-primary px-6 py-3 font-bold text-slate-50 group-hover:bg-primary/80'>
        Search
      </button>
    </div>
  );
};
