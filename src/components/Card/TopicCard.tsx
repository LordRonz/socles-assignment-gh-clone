/* eslint-disable @next/next/no-img-element */
import GitHubLink from '@/components/links/GitHubLink';
import getLangLogo from '@/lib/getLangLogo';

export type TopicCardProps = {
  topicName: string;
  displayName: string | null;
  shortDescription: string | null;
};

const TopicCard = ({
  topicName,
  displayName,
  shortDescription,
}: TopicCardProps) => {
  return (
    <div className='mb-6 flex rounded-md border border-header-search-border-clr p-4'>
      <img
        src={getLangLogo(topicName)}
        alt='topic logo'
        className='mr-4 block h-16 w-16 flex-shrink-0 rounded-md border-none'
        height={64}
        width={64}
      />
      <div className='flex-auto items-start md:flex'>
        <div className='flex-auto'>
          {!!displayName && (
            <h3 className='mb-1 text-xl font-semibold'>{displayName}</h3>
          )}
          {!!shortDescription && (
            <p className='mb-2.5 text-sm'>{shortDescription}</p>
          )}
          <GitHubLink
            className='text-xs'
            href={`https://github.com/topics/${topicName}`}
          >
            See topic
          </GitHubLink>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
