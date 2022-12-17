import clsxm from '@/lib/clsxm';

const HeaderSearchKeySlash = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='20'
      aria-hidden='true'
      className={clsxm('header-search-key-slash mr-2', className)}
      {...rest}
    >
      <path
        fill='none'
        stroke='#979A9C'
        opacity='.4'
        d='M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z'
      ></path>
      <path fill='#979A9C' d='M11.8 6L8 15.1h-.9L10.8 6h1z'></path>
    </svg>
  );
};

export default HeaderSearchKeySlash;
