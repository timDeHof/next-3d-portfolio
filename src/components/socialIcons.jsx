import React from "react";
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    title: "devto",
    Icon: FaDev,
    href: "https://dev.to/timdehof",
    className:
      "text-gray-900 bg-gray-50 hover:bg-gray-900 hover:text-gray-50 text-md rounded-md p-0.5",
  },
  {
    title: "github",
    Icon: FaGithub,
    href: "https://github.com/timDeHof",
    className:
      "text-gray-50 hover:text-gray-900 hover:bg-gray-50 bg-gray-900 p-1 text-md rounded-md",
  },
  {
    title: "linkedin",
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/timothy-dehof/",
    className:
      "text-white-100 text-md p-1 hover:bg-sky-900 bg-sky-700 rounded-md",
  },
];

const SocialIcons = () => {
  return (
    <div className='flex flex-row items-center my-6 text-2xl'>
      {socials.map(({ title, Icon, href, className }, i) => (
        <Link
          key={href}
          href={href}
          passHref={true}
          target='_blank'
          rel='noopener noreferrer nofollow'
          className={`${className} transition-colors ${
            i < socials.length - 1 ? "mr-3" : ""
          }`}>
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
