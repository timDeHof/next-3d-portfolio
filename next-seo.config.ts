import { NextSeoProps } from 'next-seo';

const SEO: NextSeoProps = {
  title: 'Tim DeHof | timdehof.dev',
  description: 'The personal website for Tim DeHof, developer.',
  canonical: 'https://timdehof.dev',
  openGraph: {
    url: 'https://timdehof.dev',
    locale: 'en_US',
    title: 'Tim DeHof | timdehof.dev',
    description: 'The personal website for Tim DeHof, developer.',

    site_name: 'Tim DeHof | timdehof.dev',
  },
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
};

export default SEO;
