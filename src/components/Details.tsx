import { BsTwitter } from 'react-icons/bs';
import { HiLink, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi';

type DetailsProps = {
  location?: string;
  twitterUrl?: string;
  website?: string;
  workingAt?: string;
};

export const Details = ({
  location = 'Not Available',
  twitterUrl = 'Not Available',
  website = 'Not Available',
  workingAt = 'Not Available',
}: DetailsProps) => {
  return (
    <div className='flex grid-cols-2 flex-col gap-4 sm:grid'>
      <span className='flex items-center gap-2'>
        <HiLocationMarker className='text-2xl text-slate-50' />
        <span className='text-slate-50'>{location}</span>
      </span>
      <span className='flex items-center gap-2'>
        <BsTwitter className='text-2xl text-slate-50' />
        <span className='text-gray-300'>{twitterUrl}</span>
      </span>
      <span className='flex items-center gap-2'>
        <HiLink className='text-2xl text-slate-50' />
        <span className='text-gray-300'>
          <a href={website}>{website}</a>
        </span>
      </span>
      <span className='flex items-center gap-2'>
        <HiOfficeBuilding className='text-2xl text-slate-50' />
        <span className='text-gray-300'>@{workingAt}</span>
      </span>
    </div>
  );
};
