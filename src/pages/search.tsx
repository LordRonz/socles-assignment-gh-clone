/* eslint-disable @next/next/no-img-element */
import { Menu } from '@headlessui/react';
import type { NextPage } from 'next';
import queryString from 'query-string';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import useSWR from 'swr';

import RepoListItem from '@/components/Card/RepoListItem';
import TopicCard from '@/components/Card/TopicCard';
import Header from '@/components/layout/Header';
import GitHubLink from '@/components/links/GitHubLink';
import SideNavLink from '@/components/links/SideNavLink';
import Seo from '@/components/Seo';
import SideNavTag from '@/components/tag/SideNavTag';
import clsxm from '@/lib/clsxm';
import { RepoSearchResponse } from '@/types/search';
import { TopicSearchResponse } from '@/types/topicSearch';

const navs = [
  {
    label: 'Repositories',
    active: true,
    tag: '1M',
  },
  {
    label: 'Code',
    tag: '?',
    disabled: true,
  },
  {
    label: 'Commits',
    tag: '5M',
  },
];

const sortingOptions = [
  'Best match',
  'Most stars',
  'Fewest stars',
  'Most forks',
  'Fewest forks',
  'Recently updated',
  'Least recently updated',
];

const SearchPage: NextPage = () => {
  const [searchInput, setSearchInput] = useState<string>();

  const [sortBy, setSortBy] = useState<string>();
  const [sortOrder, setSortOrder] = useState<string>();
  const [activeSort, setActiveSort] = useState<number>(0);

  const { data: repos } = useSWR<RepoSearchResponse>(
    searchInput
      ? queryString.stringifyUrl({
          url: '/search/repositories',
          query: {
            q: searchInput,
            per_page: '10',
            ...(sortBy && { sort: sortBy }),
            ...(sortOrder && { order: sortOrder }),
          },
        })
      : null
  );

  const { data: topics } = useSWR<TopicSearchResponse>(
    searchInput
      ? queryString.stringifyUrl({
          url: '/search/topics',
          query: {
            q: searchInput,
            per_page: '1',
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
              <nav className='mb-4 hidden list-none rounded-md border border-header-search-border-clr bg-canvas md:block'>
                {navs.map(({ label, tag, disabled, active }, i) => (
                  <SideNavLink href='#' active={active} key={`${label}-${i}`}>
                    {label}
                    <SideNavTag className='float-right' disabled={disabled}>
                      {tag}
                    </SideNavTag>
                  </SideNavLink>
                ))}
              </nav>
              <div className='mb-4 hidden rounded-md border border-header-search-border-clr p-4 md:block'>
                <h2 className='mb-2 inline-block text-sm'>Languages</h2>
                <ul className='list-none'>
                  <li>
                    <a
                      href='#'
                      className='relative mb-1 block overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md py-1.5 px-3 text-xs text-fg-muted hover:bg-canvas-subtle'
                    >
                      <span className='float-right font-semibold'>811,258</span>
                      JavaScript
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-4 hidden md:block'>
                <GitHubLink
                  href='/search/advanced?q=javascript&type=Repositories'
                  className='text-xs'
                >
                  Advanced search
                </GitHubLink>
              </div>
            </div>
            <div className='float-left w-full px-2 pt-4 md:w-9/12 md:pt-0 '>
              <div className='px-2'>
                {topics?.items.length && !!(topics?.items.length > 0) && (
                  <TopicCard
                    topicName={topics.items[0].name}
                    displayName={topics.items[0].display_name}
                    shortDescription={topics.items[0].short_description}
                  />
                )}
                <div className='relative flex justify-between border-b border-header-search-border-clr pb-4'>
                  <h3 className='text-xl'>
                    {(repos?.total_count ?? 0).toLocaleString()} repository
                    results
                  </h3>
                  <Menu as='div' className='relative z-[69] bg-canvas-subtle'>
                    <Menu.Button>
                      <summary
                        className={clsxm(
                          'list-none',
                          'px-3 py-[3px] text-xs leading-5',
                          'border-[rgba(240,246,252,0.1)] bg-[#21262d] text-[#c9d1d9]',
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
                              <span>Best Match</span>
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
                                setSortBy('stars');
                                setSortOrder(undefined);
                                setActiveSort(1);
                              }}
                            >
                              <span>Most Stars</span>
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
                                setSortBy('stars');
                                setSortOrder('asc');
                                setActiveSort(2);
                              }}
                            >
                              <span>Fewest Stars</span>
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
                                setSortBy('forks');
                                setSortOrder(undefined);
                                setActiveSort(3);
                              }}
                            >
                              <span>Most Forks</span>
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
                                setSortBy('forks');
                                setSortOrder('asc');
                                setActiveSort(4);
                              }}
                            >
                              <span>Fewest Forks</span>
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
                                setSortBy('updated');
                                setSortOrder(undefined);
                                setActiveSort(5);
                              }}
                            >
                              <span>Recently updated</span>
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
                                setSortBy('updated');
                                setSortOrder('asc');
                                setActiveSort(6);
                              }}
                            >
                              <span>Least recently updated</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                </div>
                <ul className='relative'>
                  {repos?.items.map(
                    (
                      {
                        full_name,
                        description,
                        topics,
                        language,
                        license,
                        updated_at,
                        stargazers_count,
                      },
                      i
                    ) => (
                      <RepoListItem
                        key={`${full_name}-${i}`}
                        fullName={full_name}
                        description={description}
                        topics={topics}
                        language={language}
                        license={license}
                        updatedAt={updated_at}
                        stars={stargazers_count}
                        q='javascript'
                      />
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SearchPage;
