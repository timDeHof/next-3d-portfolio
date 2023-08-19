import Navbar from "./Navbar";
import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <div className='relative z-0 min-h-screen bg-primary'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
