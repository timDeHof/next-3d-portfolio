import React from "react";

export default function Layout({ children }) {
  return (
    <div className='relative z-0 min-h-screen dark:bg-primary'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
