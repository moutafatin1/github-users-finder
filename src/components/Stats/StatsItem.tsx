type StatsItemProps = {
  title: string;
  number: number;
};
export const StatsItem = ({ number, title }: StatsItemProps) => {
  return (
    <span className='flex flex-col items-center capitalize'>
      <span className='text-slate-50'>{title}</span>
      <span className='text-slate-50'>{number}</span>
    </span>
  );
};
