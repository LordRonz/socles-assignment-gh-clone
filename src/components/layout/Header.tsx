import { GoChevronDown, GoMarkGithub } from 'react-icons/go';

import HeaderSearchKeySlash from '@/components/icons/HeaderSearchKeySlash';
import HeaderLink from '@/components/links/HeaderLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

type Links = {
  href: string;
  label: string;
}[];

type Navs = {
  label: string;
};

export const links: Links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

const navs: Navs[] = [
  { label: 'Product' },
  { label: 'Solutions' },
  { label: 'Open Source' },
];

const Header = ({ ...rest }: React.ComponentPropsWithoutRef<'header'>) => {
  return (
    <div className='relative'>
      <header
        className={clsxm('relative bg-header-bg py-4 text-white')}
        {...rest}
      >
        <div className='relative mx-auto flex h-full max-w-7xl items-center px-4'>
          <div className='flex w-full items-center justify-between lg:w-auto'>
            <UnstyledLink href='/' className='mr-4'>
              <GoMarkGithub className='h-8 w-8 text-base' />
            </UnstyledLink>
          </div>
          <div className='relative top-0 flex max-h-full w-auto flex-auto flex-col p-0'>
            <div className='mt-4 flex h-full w-full flex-auto justify-between self-end overflow-visible rounded-none bg-transparent p-0 lg:mt-0 lg:flex-row lg:p-0'>
              <nav className='mb-4 mt-0 block px-4 lg:mb-0 lg:px-0'>
                <ul className='flex list-none'>
                  {navs.map(({ label }, i) => (
                    <li
                      className='relative flex flex-nowrap items-center justify-between'
                      key={`${label}-${i}`}
                    >
                      <button className='flex w-auto items-center justify-between whitespace-nowrap border-0 bg-transparent py-2 px-2 hover:opacity-75'>
                        {label}
                        <GoChevronDown
                          className='ml-1 align-middle opacity-50'
                          size={16}
                        />
                      </button>
                    </li>
                  ))}
                  <li className='relative flex flex-nowrap items-center justify-between'>
                    <UnstyledLink
                      href='/pricing'
                      className='flex w-auto items-center justify-between whitespace-nowrap border-0 bg-transparent py-2 px-2'
                    >
                      Pricing
                    </UnstyledLink>
                  </li>
                </ul>
              </nav>
              <div className='mb-4 flex items-center px-4 text-center lg:mb-0 lg:px-0 lg:text-left'>
                <div className='mb-2 flex min-w-0 lg:mb-0'>
                  <div className='min-w-auto relative mr-4 w-60 max-w-[272px] flex-auto self-auto'>
                    <div className='relative'>
                      <form
                        action='/search'
                        method='get'
                        role='search'
                        acceptCharset='UTF-8'
                        aria-label='Site'
                      >
                        <label
                          htmlFor=''
                          className='relative flex min-h-[28px] w-full max-w-full items-center justify-between rounded-md border border-header-search-border-clr bg-header-search-bg-clr bg-[center_top_8px] bg-no-repeat p-0 leading-5'
                        >
                          <input
                            type='text'
                            className='peer table-cell w-full appearance-none overflow-visible rounded-md bg-black py-2 px-3 text-sm outline-none placeholder:text-[#6e7681] placeholder:focus:text-white/75'
                            placeholder='Search GitHub'
                          />
                          <HeaderSearchKeySlash className='peer-focus:hidden' />
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='relative inline-block lg:mr-4'>
                  <HeaderLink href='/login'>Sign in</HeaderLink>
                </div>
                <HeaderLink
                  href='/signup'
                  className='flex-shrink-0 rounded-md border border-header-search-border-clr !px-2 py-1'
                >
                  Sign up
                </HeaderLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
