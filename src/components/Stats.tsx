type StatsProps = {
  reposCount: number;
  followersCount: number;
  followingCount: number;
};

export const Stats = ({
  reposCount,
  followersCount,
  followingCount,
}: StatsProps) => {
  return (
    <div className='mx-auto flex  justify-around rounded-xl bg-very-dark-blue p-4'>
      <span className='flex flex-col'>
        <span className='text-slate-50'>Repos</span>
        <span className='text-slate-50'>{reposCount}</span>
      </span>
      <span className='flex flex-col'>
        <span className='text-slate-50'>Followers</span>
        <span className='text-slate-50'>{followersCount}</span>
      </span>
      <span className='flex flex-col'>
        <span className='text-slate-50'>Following</span>
        <span className='text-slate-50'>{followingCount}</span>
      </span>
    </div>
  );
};
