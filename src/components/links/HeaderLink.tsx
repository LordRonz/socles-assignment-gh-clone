import UnstyledLink, {
  type UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

const HeaderLink = ({ children, className, ...rest }: UnstyledLinkProps) => (
  <UnstyledLink
    {...rest}
    className={clsxm(
      'decoration-none inline-block whitespace-nowrap bg-transparent p-2 hover:opacity-75 lg:p-0',
      className
    )}
  >
    {children}
  </UnstyledLink>
);

export default HeaderLink;
