import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../constants/globalStyle';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Minimal Ar</title>
      </Head>
      <GlobalStyle />
        <Component {...pageProps} />
    </>
  );
}
