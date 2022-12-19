import UnstyledLink, {
  type UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

export type SideNavLinkProps = {
  active?: boolean;
} & UnstyledLinkProps;

const SideNavLink = ({
  children,
  className,
  active = false,
  ...rest
}: SideNavLinkProps) => (
  <UnstyledLink
    {...rest}
    className={clsxm(
      'relative block border-b border-muted p-2 px-4 text-sm text-text-color-fg hover:bg-neutral-subtle',
      active &&
        "before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 before:bg-border-active before:content-['']",
      active && 'cursor-default bg-menu-bg-active',
      'first:rounded-tl-md first:rounded-tr-md first:border-t-0',
      className
    )}
  >
    {children}
  </UnstyledLink>
);

export default SideNavLink;
