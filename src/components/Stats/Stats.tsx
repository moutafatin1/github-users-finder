import { StatsItem } from './StatsItem';

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
      <StatsItem title='repos' number={reposCount} />
      <StatsItem title='followers' number={followersCount} />
      <StatsItem title='following' number={followingCount} />
    </div>
  );
};
