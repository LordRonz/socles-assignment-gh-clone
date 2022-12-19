import SideNavLink from '@/components/links/SideNavLink';

const navs = [
  {
    label: 'Repositories',
    href: '/',
  },
  {
    label: 'Users',
    href: '/users',
  },
];

const SideNav = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <nav className='mb-4 hidden list-none rounded-md border border-header-search-border-clr bg-canvas md:block'>
      {navs.map(({ label, href }, i) => (
        <SideNavLink
          href={href}
          active={activeIndex === i}
          key={`${label}-${i}`}
        >
          {label}
        </SideNavLink>
      ))}
    </nav>
  );
};

export default SideNav;
