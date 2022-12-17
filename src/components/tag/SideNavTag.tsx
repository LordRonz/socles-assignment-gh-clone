import React from 'react';

import clsxm from '@/lib/clsxm';

const SideNavTag = ({ children, className, disabled, ...rest }: React.ComponentPropsWithoutRef<'span'> & { disabled?: boolean }) => (
  <span
    {...rest}
    className={clsxm(
      'bg-neutral-emphasis text-white border border-transparent rounded-3xl text-xs font-medium leading-[18px] min-w-[20px] px-1.5 py-0 text-center',
      'ml-1',
      disabled && 'bg-neutral-muted',
      className
    )}
  >
    {children}
  </span>
);

export default SideNavTag;
