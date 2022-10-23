type UserInfoProps = {
  name: string;
  githubUrl: string;
  login: string;
  joiningDate?: string;
  className?: string;
};

export const UserInfo = ({
  githubUrl,
  login,
  joiningDate = 'Joined 25 Jan 2011',
  name,
  className,
}: UserInfoProps) => {
  return (
    <div className={className}>
      <span className='font-bold text-slate-50 md:text-xl lg:text-2xl'>
        {name}
      </span>
      <a href={githubUrl} className='text-primary md:text-xl'>
        @{login}
      </a>
      <span className='text-slate-50 md:text-lg'>{joiningDate}</span>
    </div>
  );
};
