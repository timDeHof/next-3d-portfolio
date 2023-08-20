import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import "@styles/globals.css";
import { Layout, Footer, Navbar } from "../components";
import { ThemeProvider } from "next-themes";
import SEO from "../../next-seo.config";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
