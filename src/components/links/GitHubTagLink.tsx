import UnstyledLink, {
  type UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

const GitHubTagLink = ({ children, className, ...rest }: UnstyledLinkProps) => (
  <UnstyledLink
    {...rest}
    className={clsxm(
      'm-0 mb-1 inline-block font-medium whitespace-nowrap rounded-3xl',
      'text-color-fg border border-transparent text-xs px-2 mx-0 leading-[22px] bg-accent-subtle',
      'hover:text-white hover:bg-accent-emphasis',
      className
    )}
  >
    {children}
  </UnstyledLink>
);

export default GitHubTagLink;
