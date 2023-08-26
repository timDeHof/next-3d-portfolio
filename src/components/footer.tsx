import React from 'react';
import Link from 'next/link';
import SocialIcons from './socialIcons';

const Footer = () => (
  <footer className='flex w-full flex-col items-center justify-center pt-10'>
    <p className='text-sm text-gray-500 transition-colors dark:text-gray-300 '>
      lets connect here
    </p>
    <SocialIcons />
    <Link
      href='/blog/rewriting-my-website-with-a-devto-cms'
      className='mb-8 text-sm text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
    >
      Powered by the Dev.to API. Find out more.
    </Link>
  </footer>
);

export default Footer;
