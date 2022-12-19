/* eslint-disable @next/next/no-img-element */
import GitHubLink from '@/components/links/GitHubLink';
import clsxm from '@/lib/clsxm';

export type UserListItemProps = {
  name: string;
  htmlUrl: string;
  avatarUrl: string;
} & React.ComponentPropsWithoutRef<'div'>;

const UserListItem = ({
  className,
  name,
  htmlUrl,
  avatarUrl,
  ...rest
}: UserListItemProps) => {
  return (
    <div
      className={clsxm('-m-px flex list-none p-4 px-0', className)}
      {...rest}
    >
      <div className='mr-2 flex-shrink-0'>
        <a href='' className='table'>
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className='mt-0.5 rounded-md'
            width={20}
            height={20}
          />
        </a>
      </div>
      <div className='flex-auto'>
        <div className='flex '>
          <GitHubLink href={htmlUrl}>{name}</GitHubLink>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
