'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='relative z-0 min-h-screen dark:bg-primary'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
