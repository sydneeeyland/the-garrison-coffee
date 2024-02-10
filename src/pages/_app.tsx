import React from 'react';

type AppProps = {
  Component: any;
  pageProps: object;
};

export default function App({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout ?? ((page: React.ReactNode) => page);

  return Layout(<Component {...pageProps} />);
}
