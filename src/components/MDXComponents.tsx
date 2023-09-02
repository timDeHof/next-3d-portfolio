import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const H1 = ({ children }) => (
  <h1 className='mb-4 hidden text-4xl'>{children}</h1>
);
export const H2 = ({ children }) => (
  <h2 className='mb-3 text-3xl'>{children}</h2>
);
// Custom component for H3
export const H3 = ({ children }) => (
  <h3 className='mb-2 text-2xl'>{children}</h3>
);
export const CodeBlock = ({ children }) => (
  <code className='inline-block rounded-xl bg-gray-800 p-1'>{children}</code>
);
// Custom component for images
export const Img = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={600}
    height={400}
    className='mx-auto h-auto w-full rounded-xl md:w-3/5 lg:w-2/3'
  />
);
// Custom component for paragraphs
export const P = ({ children }) => <p className='mb-4 text-lg'>{children}</p>;
// Custom component for unordered lists
export const Ul = ({ children }) => (
  <ul className='list-inside list-disc pl-5'>{children}</ul>
);

// Custom component for ordered lists
export const Ol = ({ children }) => (
  <ol className='list-inside list-decimal pl-5'>{children}</ol>
);

// Custom component for list items
export const Li = ({ children }) => <li className='mb-2 flex'>{children}</li>;

// Custom component for links
export const A = ({ children, href }) => (
  <Link href={href} className='text-blue-500 hover:underline'>
    {children}
  </Link>
);
