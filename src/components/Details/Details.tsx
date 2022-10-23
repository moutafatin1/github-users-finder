import { BsTwitter } from 'react-icons/bs';
import { HiLink, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi';
import { DetailItem } from './DetailItem';

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
      <DetailItem icon={<HiLocationMarker />} text={location} />
      <DetailItem icon={<BsTwitter />} text={twitterUrl} />
      <DetailItem icon={<HiLink />} text={website} />
      <DetailItem icon={<HiOfficeBuilding />} text={workingAt} />
    </div>
  );
};
