import '@/styles/globals.css';

import { Noto_Sans } from '@next/font/google';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SWRConfig } from 'swr';

declare module 'next-themes' {
  interface ThemeProviderProps {
    children: React.ReactNode;
  }
}

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--notosans-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <style jsx global>{`
          html {
            font-family: ${notoSans.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
};

export default MyApp;
