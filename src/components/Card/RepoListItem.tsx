import { formatDistance } from 'date-fns';

import GitHubStar from '@/components/icons/GitHubStar';
import OcticonRepo from '@/components/icons/OcticonRepo';
import GitHubLink from '@/components/links/GitHubLink';
import GitHubTagLink from '@/components/links/GitHubTagLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';
import getLangColor from '@/lib/languageColors';
import nFormatter from '@/lib/nFormatter';
import { License } from '@/types/search';

export type RepoListItemProps = {
  q: string;
  fullName: string;
  description: string | null;
  topics: string[];
  language: string | null;
  license: License | null;
  stars: number;
  updatedAt: string | null;
} & React.ComponentPropsWithoutRef<'li'>;

const RepoListItem = ({
  className,
  q,
  fullName,
  description,
  topics,
  language,
  license,
  updatedAt,
  stars,
  ...rest
}: RepoListItemProps) => {
  const fullNameArr = fullName.split(q.trim().toLowerCase());

  return (
    <li
      className={clsxm(
        'relative flex list-none justify-start border-b-0 py-6',
        className
      )}
      {...rest}
    >
      <div className='mr-2 flex-shrink-0'>
        <OcticonRepo className='text-[#6737d]' />
      </div>
      <div className='-mt-1 flex-auto'>
        <div className='flex'>
          <div className='text-base font-normal'>
            <GitHubLink
              href={`https://github.com/${fullName}`}
              className='align-middle'
            >
              {fullNameArr.map((item, index) => (
                <>
                  {item}
                  {index !== fullNameArr.length - 1 && (
                    <b>{q.trim().toLowerCase()}</b>
                  )}
                </>
              ))}
            </GitHubLink>
          </div>
        </div>
        {description && <p className='mb-1 text-sm'>{description}</p>}
        <div>
          <div>
            {topics.map((topic, i) => (
              <GitHubTagLink
                href={`https://github.com/topics/${topic}`}
                key={`${topic}-${i}`}
              >
                {topic}
              </GitHubTagLink>
            ))}
          </div>
          <div className='flex flex-wrap space-x-4 text-xs text-fg-muted'>
            <div>
              <UnstyledLink
                href={`https://github.com/${fullName}/stargazers`}
                className='text-fg-muted hover:text-color-fg'
              >
                <GitHubStar /> {nFormatter(stars, 1)}
              </UnstyledLink>
            </div>
            {language && (
              <div>
                <span>
                  <span
                    className='relative top-px inline-block h-3 w-3 rounded-full'
                    style={{
                      backgroundColor: getLangColor(language) ?? 'transparent',
                    }}
                  />{' '}
                  <span>{language}</span>
                </span>
              </div>
            )}
            {license && <div>{license.name}</div>}
            {updatedAt && (
              <div>
                Updated{' '}
                {formatDistance(new Date(updatedAt), new Date(), {
                  addSuffix: true,
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default RepoListItem;
