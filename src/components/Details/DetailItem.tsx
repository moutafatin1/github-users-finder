type DetailItemProps = {
  icon: React.ReactNode;
  text?: string;
};
export const DetailItem = ({
  icon,
  text = 'Not Available',
}: DetailItemProps) => {
  return (
    <span className='flex items-center gap-2'>
      <span className='text-2xl text-slate-50'>{icon}</span>
      <span className='text-slate-50'>{text}</span>
    </span>
  );
};
