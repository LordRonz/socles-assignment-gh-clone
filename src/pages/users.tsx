/* eslint-disable @next/next/no-img-element */
import { Menu } from '@headlessui/react';
import type { NextPage } from 'next';
import queryString from 'query-string';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import useSWR from 'swr';

import UserListItem from '@/components/Card/UserListItem';
import GitHubCheck from '@/components/icons/GitHubCheck';
import Header from '@/components/layout/Header';
import SideNav from '@/components/layout/SideNav';
import Pagination from '@/components/Pagination';
import Seo from '@/components/Seo';
import clsxm from '@/lib/clsxm';
import { UserSearchResponse } from '@/types/userSearch';

const sortingOptions = [
  'Best match',
  'Most followers',
  'Fewest followers',
  'Most recently joined',
  'Least recently joined',
  'Most repositories',
  'Fewest repositories',
];

const UserPage: NextPage = () => {
  const [searchInput, setSearchInput] = useState<string>();

  const [sortBy, setSortBy] = useState<string>();
  const [sortOrder, setSortOrder] = useState<string>();
  const [activeSort, setActiveSort] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const { data: users } = useSWR<UserSearchResponse>(
    searchInput
      ? queryString.stringifyUrl({
          url: '/search/users',
          query: {
            q: searchInput,
            per_page: '10',
            ...(sortBy && { sort: sortBy }),
            ...(sortOrder && { order: sortOrder }),
            page,
          },
        })
      : null
  );

  return (
    <>
      <Seo />
      <Header onSubmit={(s: string) => setSearchInput(s)} />
      <div>
        <main>
          <div className='mx-auto max-w-5xl md:px-2 lg:mt-6'>
            <div className='float-left w-full md:w-3/12 md:px-2'>
              <SideNav activeIndex={1} />
            </div>
            <div className='float-left w-full px-2 pt-4 md:w-9/12 md:pt-0 '>
              <div className='px-2'>
                <div className='relative flex justify-between border-b border-header-search-border-clr pb-4'>
                  <h3 className='text-xl'>
                    {(users?.total_count ?? 0).toLocaleString()} users
                  </h3>
                  <Menu as='div' className='relative z-[69] bg-canvas-subtle'>
                    <Menu.Button>
                      <summary
                        className={clsxm(
                          'list-none',
                          'px-3 py-[3px] text-xs leading-5',
                          'border-[rgba(240,246,252,0.1)] bg-[#21262d] text-[#c9d1d9]',
                          'border hover:border-fg-muted hover:bg-header-search-border-clr',
                          'relative inline-block cursor-pointer select-none appearance-none whitespace-nowrap rounded-md border align-middle'
                        )}
                      >
                        <i className='font-medium not-italic opacity-75'>
                          Sort:
                        </i>{' '}
                        <span>{sortingOptions[activeSort]}</span>{' '}
                        <IoMdArrowDropdown className='inline' size={16} />
                      </summary>
                    </Menu.Button>
                    <Menu.Items
                      className={clsxm(
                        'mt-1 mb-5 w-[300px] overflow-hidden rounded-md border border-header-search-border-clr text-xs text-text-color-fg',
                        'absolute right-0 block'
                      )}
                    >
                      <Menu.Item>
                        {() => (
                          <div className='border-b border-header-search-border-clr bg-canvas-subtle py-2 px-2.5 leading-4'>
                            <span>Sort Options</span>
                          </div>
                        )}
                      </Menu.Item>
                      <div className='relative max-h-[400px] overflow-auto'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={clsxm(
                                'block w-full overflow-hidden border-b border-header-search-border-clr bg-canvas-subtle p-2 pl-[30px] text-left',
                                active && 'bg-accent-emphasis text-white'
                              )}
                              onClick={() => {
                                setSortBy(undefined);
                                setSortOrder(undefined);
                                setActiveSort(0);
                              }}
                            >
                              <GitHubCheck
                                className={clsxm(
                                  'float-left -ml-5',
                                  activeSort !== 0 && 'hidden'
                                )}
                              />
                              <span>{sortingOptions[0]}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='relative max-h-[400px] overflow-auto'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={clsxm(
                                'block w-full overflow-hidden border-b border-header-search-border-clr bg-canvas-subtle p-2 pl-[30px] text-left',
                                active && 'bg-accent-emphasis text-white'
                              )}
                              onClick={() => {
                                setSortBy('followers');
                                setSortOrder(undefined);
                                setActiveSort(1);
                              }}
                            >
                              <GitHubCheck
                                className={clsxm(
                                  'float-left -ml-5',
                                  activeSort !== 1 && 'hidden'
                                )}
                              />
                              <span>{sortingOptions[1]}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='relative max-h-[400px] overflow-auto'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={clsxm(
                                'block w-full overflow-hidden border-b border-header-search-border-clr bg-canvas-subtle p-2 pl-[30px] text-left',
                                active && 'bg-accent-emphasis text-white'
                              )}
                              onClick={() => {
                                setSortBy('followers');
                                setSortOrder('asc');
                                setActiveSort(2);
                              }}
                            >
                              <GitHubCheck
                                className={clsxm(
                                  'float-left -ml-5',
                                  activeSort !== 2 && 'hidden'
                                )}
                              />
                              <span>{sortingOptions[2]}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='relative max-h-[400px] overflow-auto'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={clsxm(
                                'block w-full overflow-hidden border-b border-header-search-border-clr bg-canvas-subtle p-2 pl-[30px] text-left',
                                active && 'bg-accent-emphasis text-white'
                              )}
                              onClick={() => {
                                setSortBy('joined');
                                setSortOrder(undefined);
                                setActiveSort(3);
                              }}
                            >
                              <GitHubCheck
                                className={clsxm(
                                  'float-left -ml-5',
                                  activeSort !== 3 && 'hidden'
                                )}
                              />
                              <span>{sortingOptions[3]}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='relative max-h-[400px] overflow-auto'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={clsxm(
                                'block w-full overflow-hidden border-b border-header-search-border-clr bg-canvas-subtle p-2 pl-[30px] text-left',
                                active && 'bg-accent-emphasis text-white'
                              )}
                              onClick={() => {
                                setSortBy('joined');
                                setSortOrder('asc');
                                setActiveSort(4);
                              }}
                            >
                              <GitHubCheck
                                className={clsxm(
                                  'float-left -ml-5',
                                  activeSort !== 4 && 'hidden'
                                )}
                              />
                              <span>{sortingOptions[4]}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='relative max-h-[400px] overflow-auto'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={clsxm(
                                'block w-full overflow-hidden border-b border-header-search-border-clr bg-canvas-subtle p-2 pl-[30px] text-left',
                                active && 'bg-accent-emphasis text-white'
                              )}
                              onClick={() => {
                                setSortBy('repositories');
                                setSortOrder(undefined);
                                setActiveSort(5);
                              }}
                            >
                              <GitHubCheck
                                className={clsxm(
                                  'float-left -ml-5',
                                  activeSort !== 5 && 'hidden'
                                )}
                              />
                              <span>{sortingOptions[5]}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='relative max-h-[400px] overflow-auto'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={clsxm(
                                'block w-full overflow-hidden border-b border-header-search-border-clr bg-canvas-subtle p-2 pl-[30px] text-left',
                                active && 'bg-accent-emphasis text-white'
                              )}
                              onClick={() => {
                                setSortBy('repositories');
                                setSortOrder('asc');
                                setActiveSort(6);
                              }}
                            >
                              <GitHubCheck
                                className={clsxm(
                                  'float-left -ml-5',
                                  activeSort !== 6 && 'hidden'
                                )}
                              />
                              <span>{sortingOptions[6]}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                </div>
                <ul className='relative'>
                  {users?.items.map(({ login, html_url, avatar_url }, i) => (
                    <UserListItem
                      key={`${login}-${i}`}
                      htmlUrl={html_url}
                      avatarUrl={avatar_url}
                      name={login}
                    />
                  ))}
                </ul>
                <Pagination
                  pageCount={Math.min(
                    Math.ceil((users?.total_count ?? 0) / 10),
                    100
                  )}
                  currentPage={page - 1}
                  onPageChange={({ selected }) => setPage(selected + 1)}
                  className='mb-20'
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserPage;
