import { FiSearch } from 'react-icons/fi';
import { Button } from './Button';

export const SearchInput = () => {
  return (
    <div className='group relative w-full'>
      <input
        type='text'
        className='w-full rounded-xl border-none bg-dark-blue px-10 py-6 pl-14 font-bold text-slate-50 focus:border-primary group-hover:bg-dark-blue/70'
        placeholder='Search for github user'
      />
      <FiSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-3xl text-primary ' />
      <span className='absolute right-3 top-1/2  -translate-y-1/2 '>
        <Button />
      </span>
    </div>
  );
};
