import React from "react";
import SocialIcons from "./socialIcons";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className='flex flex-col items-center w-full'>
      <p className='text-sm text-gray-500 transition-colors dark:text-gray-300 '>
        lets connect here
      </p>
      <SocialIcons />
      <Link
        href='/blog/rewriting-my-website-with-a-devto-cms'
        className='mb-8 text-sm text-gray-500 transition-colors dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'>
        Powered by the Dev.to API. Find out more.
      </Link>
    </footer>
  );
};

export default Footer;
