import OcticonRepo from '@/components/icons/OcticonRepo';
import GitHubLink from '@/components/links/GitHubLink';
import GitHubTagLink from '@/components/links/GitHubTagLink';
import clsxm from '@/lib/clsxm';

const RepoListItem = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'li'>) => {
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
            <GitHubLink href='#' className='align-middle'>
              airbnb/<em>javascript</em>
            </GitHubLink>
          </div>
        </div>
        <p className='mb-1 text-sm'>Javascript Style Guide</p>
        <div>
          <div>
            <GitHubTagLink href='#'>Banger</GitHubTagLink>
          </div>
          <div className='flex flex-wrap text-xs text-fg-muted'>

          </div>
        </div>
      </div>
    </li>
  );
};

export default RepoListItem;
