import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';
import Image from 'next/image';
import { styles } from '../styles/styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [setTheme, theme]);
  useEffect(() => setMounted(true), []);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link
          href='/'
          className='flex items-center justify-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            title='logo'
            alt='logo'
            width={36}
            height={36}
            loading='eager'
            className='object-fit h-12 w-12'
          />
          <p className='flex cursor-pointer text-[18px] font-bold text-white'>
            Tim DeHof &nbsp;
            <span className='hidden sm:block'>| Developer</span>
          </p>
        </Link>
        <ul className='hidden list-none flex-row gap-6 sm:flex'>
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? 'text-white' : 'text-secondary'
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(title)}
            >
              {/* <a href={`${id}`}>{title}</a> */}
              <Link href={`/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className='ml-1 hidden sm:flex sm:items-center'>
          <button
            type='button'
            role='button'
            aria-label='dark mode button'
            tabIndex={0}
            className='bg-pink d-flex h-12 w-12 items-center justify-center rounded-md ring-blue-700 focus:outline-none focus:ring-2 dark:bg-gray-900'
            onClick={toggleTheme}
          >
            {mounted ? (
              theme === 'light' ? (
                <HiMoon className='ml-1 inline h-6 w-6 text-white-100' />
              ) : (
                <HiSun className='inline h-6 w-6 text-orange-400' />
              )
            ) : null}
          </button>
        </div>
        <div className='flex flex-1 items-center justify-end sm:hidden'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            title='menu'
            width={36}
            height={36}
            loading='eager'
            className='h-[28px] w-[28px] cursor-pointer object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className='ml-4 flex items-center'>
            <button
              className='bg-pink d-flex h-12 w-12 items-center justify-center rounded-md ring-blue-700 focus:outline-none focus:ring-2 dark:bg-gray-900'
              aria-label='dark mode button'
              onClick={toggleTheme}
            >
              {mounted ? (
                theme === 'light' ? (
                  <HiMoon className='ml-1 inline h-6 w-6 text-white-100' />
                ) : (
                  <HiSun className='inline h-6 w-6 text-orange-400' />
                )
              ) : null}
            </button>
          </div>
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } black-gradient min absolute right-0 top-20 z-10 mx-4 my-2 w-[140px] rounded-xl p-6`}
          >
            <ul className='flex list-none flex-col items-start justify-end gap-4'>
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  className={`${
                    active === title ? 'text-white' : 'text-secondary'
                  } font-poppins cursor-pointer text-[16px] font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(title);
                  }}
                >
                  {/* <a href={`${id}`}>{title}</a> */}
                  <Link href={`/${title}`}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
