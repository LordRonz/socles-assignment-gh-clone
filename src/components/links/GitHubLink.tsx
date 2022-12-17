import UnstyledLink, {
  type UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

const GitHubLink = ({ children, className, ...rest }: UnstyledLinkProps) => (
  <UnstyledLink
    {...rest}
    className={clsxm(
      'text-color-fg no-underline decoration-color-fg decoration-solid decoration-auto hover:underline m-0 p-0',
      className
    )}
  >
    {children}
  </UnstyledLink>
);

export default GitHubLink;
