import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { styles } from "@styles/styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { HiMoon, HiSun } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);
  useEffect(() => setMounted(true), []);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <Image
            src={logo}
            title='logo'
            alt='logo'
            width='100%'
            height='100%'
            loading='eager'
            className='object-contain h-9 w-9'
          />
          <p className='flex cursor-pointer text-[18px] font-bold text-white'>
            Tim DeHof &nbsp;
            <span className='hidden sm:block'>| Developer</span>
          </p>
        </Link>
        <ul className='flex-row hidden gap-6 list-none sm:flex'>
          {navLinks.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={`${
                  active === title ? "text-white" : "text-secondary"
                } cursor-pointer text-[18px] font-medium hover:text-white`}
                onClick={() => setActive(title)}>
                {/* <a href={`${id}`}>{title}</a> */}
                <Link href={`/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <div className='flex items-center'>
          <button
            className='items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex'
            onClick={toggleTheme}>
            {mounted ? (
              theme === "light" ? (
                <HiMoon className='inline w-6 h-6 ml-1 text-white-100' />
              ) : (
                <HiSun className='inline w-6 h-6 text-orange-400' />
              )
            ) : null}
          </button>
        </div>
        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            title='menu'
            width='100%'
            height='100%'
            className='h-[28px] w-[28px] cursor-pointer object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className='flex items-center'>
            <button
              className='items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex'
              onClick={toggleTheme}>
              {mounted ? (
                theme === "light" ? (
                  <HiMoon className='inline w-6 h-6 ml-1 text-white-100' />
                ) : (
                  <HiSun className='inline w-6 h-6 text-orange-400' />
                )
              ) : null}
            </button>
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient min absolute right-0 top-20 z-10 mx-4 my-2 w-[140px] rounded-xl p-6`}>
            <ul className='flex flex-col items-start justify-end gap-4 list-none'>
              {navLinks.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    className={`${
                      active === title ? "text-white" : "text-secondary"
                    } font-poppins cursor-pointer text-[16px] font-medium`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(title);
                    }}>
                    {/* <a href={`${id}`}>{title}</a> */}
                    <Link href={`/${title}`}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
