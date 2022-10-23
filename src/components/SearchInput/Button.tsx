import React from 'react';

export const Button = ({
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className=' rounded-xl bg-primary px-6 py-3 font-bold text-slate-50 transition-colors hover:bg-blue-700'
    >
      Search
    </button>
  );
};
