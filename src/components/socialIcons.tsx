import React from 'react';
import { FaDev, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const socials = [
  {
    title: 'devto',
    Icon: FaDev,
    href: 'https://dev.to/timdehof',
    className:
      'text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-500 hover:text-gray-100 text-md rounded-md p-1',
  },
  {
    title: 'github',
    Icon: FaGithub,
    href: 'https://github.com/timDeHof',
    className:
      'text-gray-50 hover:text-gray-100 hover:bg-gray-500 bg-gray-900 p-1 text-md rounded-md',
  },
  {
    title: 'linkedin',
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/timothy-dehof/',
    className:
      'text-white-100 text-md p-1 hover:bg-sky-900 bg-sky-700 rounded-md',
  },
];

const SocialIcons = () => (
  <div className='my-6 flex flex-row items-center text-2xl'>
    {socials.map(({ title, Icon, href, className }, i) => (
      <Link
        key={`${title} icon`}
        href={href}
        passHref
        target='_blank'
        rel='noopener noreferrer nofollow'
        className={`${className} transition-colors ${
          i < socials.length - 1 ? 'mr-3' : ''
        }`}
      >
        <Icon />
      </Link>
    ))}
  </div>
);

export default SocialIcons;
