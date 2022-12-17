/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import Header from '@/components/layout/Header';
import GitHubLink from '@/components/links/GitHubLink';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1>Scratches</h1>
            <GitHubLink href='https://google.com'>Tez</GitHubLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
