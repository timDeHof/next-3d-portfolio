'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { styles } from '@/styles/styles';
import { navLinks } from '@/lib/constants';
import { logo, menu, close } from '@/lib/assets';

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link href='/' className='flex items-center justify-center gap-2'>
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
        <div className='hidden list-none flex-row gap-6 sm:flex'>
          {navLinks.map(({ id, title, href }) => {
            const isActive = pathname === title;
            return (
              <Link
                key={id}
                className={`${
                  isActive ? 'text-purple-600' : 'text-secondary'
                } cursor-pointer text-[18px] font-medium hover:text-white`}
                href={href}
              >
                {title}
              </Link>
            );
          })}
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
        </div>
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } min absolute right-0 top-20 z-10 mx-4 my-2 w-[140px] rounded-b-xl bg-primary p-6 shadow-2xl`}
        >
          <ul className='flex list-none flex-col items-start justify-end gap-4'>
            {navLinks.map(({ id, title, href }) => {
              const isActive = pathname === title;
              return (
                <Link
                  key={id}
                  className={`${
                    isActive ? 'text-purple-600' : 'text-secondary'
                  } cursor-pointer text-[18px] font-medium hover:text-white`}
                  href={href}
                >
                  {title}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
