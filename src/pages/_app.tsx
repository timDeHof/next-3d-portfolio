import React from 'react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Layout } from '../components';
import SEO from '../../next-seo.config';
import 'typeface-lato';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
    <DefaultSeo {...SEO} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
