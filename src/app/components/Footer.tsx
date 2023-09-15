'use client';

import React from 'react';
import SocialIcons from '@/components/SocialIcons';

const Footer = () => (
  <footer className='flex h-1/3 w-full flex-col items-center justify-center pt-10'>
    <p className='text-sm text-gray-500 transition-colors dark:text-gray-300 '>
      lets connect here
    </p>
    <SocialIcons />
    <p className='text-sm text-gray-500 transition-colors dark:text-gray-300 '>
      Designed and Built by Tim DeHof
    </p>
  </footer>
);

export default Footer;
