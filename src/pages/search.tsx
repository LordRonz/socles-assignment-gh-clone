/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import queryString from 'query-string';
import useSWR from 'swr';

import RepoListItem from '@/components/Card/RepoListItem';
import TopicCard from '@/components/Card/TopicCard';
import Header from '@/components/layout/Header';
import GitHubLink from '@/components/links/GitHubLink';
import SideNavLink from '@/components/links/SideNavLink';
import Seo from '@/components/Seo';
import SideNavTag from '@/components/tag/SideNavTag';
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

const SearchPage: NextPage = () => {
  const { data: repos } = useSWR<RepoSearchResponse>(
    queryString.stringifyUrl({
      url: '/search/repositories',
      query: {
        q: 'javascript',
        per_page: '10',
      },
    })
  );

  const { data: topics } = useSWR<TopicSearchResponse>(
    queryString.stringifyUrl({
      url: '/search/topics',
      query: {
        q: 'javascript',
        per_page: '1',
      },
    })
  );

  return (
    <>
      <Seo />
      <Header />
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
                  <details className='mt-0 hidden md:block'></details>
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
