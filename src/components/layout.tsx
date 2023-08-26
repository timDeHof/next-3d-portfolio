import React, { ReactNode } from 'react';
import { Navbar, Footer } from '.';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className='relative z-0 min-h-screen dark:bg-primary'>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
