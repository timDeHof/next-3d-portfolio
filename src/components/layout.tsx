import React, { ReactNode } from "react";
import { Navbar, Footer } from ".";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative z-0 min-h-screen dark:bg-primary">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
