import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import ReactPaginate, { type ReactPaginateProps } from 'react-paginate';

import clsxm from '@/lib/clsxm';

type PaginationProps = {
  pageCount: number;
  pageRangeDisplayed?: number;
  currentPage?: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
  containerClassName?: string;
} & ReactPaginateProps;

const Pagination = ({
  pageCount,
  className,
  onPageChange,
  currentPage,
  containerClassName,
  pageRangeDisplayed = 5,
}: PaginationProps) => {
  return (
    <div className={clsxm('my-4 text-center', containerClassName)}>
      <ReactPaginate
        breakLabel='...'
        nextLabel={
          <div className='flex items-center'>
            <span>Next</span>
            <MdNavigateNext />
          </div>
        }
        marginPagesDisplayed={2}
        onPageChange={onPageChange}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        forcePage={currentPage}
        previousLabel={
          <div className='flex items-center'>
            <MdNavigateBefore />
            <span>Previous</span>
          </div>
        }
        renderOnZeroPageCount={() => null}
        containerClassName='flex md:inline-block'
        className={clsxm('flex md:inline-block', className)}
        pageClassName='inline-block min-2'
        pageLinkClassName='min-w-[32px] select-none whitespace-nowrap rounded-md border border-transparent py-[5px] px-2.5 text-center align-middle leading-5 inline-block hover:border-header-search-border-clr border'
        activeLinkClassName='bg-accent-emphasis'
        disabledLinkClassName='text-fg-disabled cursor-default'
        previousClassName='inline-block'
        nextClassName='inline-block'
        breakClassName='min-w-[32px] select-none whitespace-nowrap rounded-md border border-transparent py-[5px] px-2.5 text-center align-middle leading-5 inline-block'
        previousLinkClassName='min-w-[32px] select-none whitespace-nowrap rounded-md border border-transparent py-[5px] px-2.5 text-center align-middle leading-5 inline-block text-color-fg hover:border-header-search-border-clr border'
        nextLinkClassName='min-w-[32px] select-none whitespace-nowrap rounded-md border border-transparent py-[5px] px-2.5 text-center align-middle leading-5 inline-block text-color-fg hover:border-header-search-border-clr border'
      />
    </div>
  );
};

export default Pagination;
