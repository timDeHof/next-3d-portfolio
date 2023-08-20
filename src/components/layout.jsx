import React from "react";
import { Navbar, Footer } from "../components";
export default function Layout({ children }) {
  return (
    <div className='relative z-0 min-h-screen dark:bg-primary'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
