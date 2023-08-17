import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { ComputersCanvas } from "../components/canvas";
export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-18 `}>
      <Head>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/logo.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#000' />

        <title>Tim DeHof: Fullstack Developer & Designer Portfolio</title>
        <meta
          name='description'
          content="Explore Tim DeHof's developer portfolio. Discover dynamic web designs and innovative projects that bring ideas to life."
        />
      </Head>
      <section className='relative w-full h-screen mx-auto bg-center bg-no-repeat bg-cover bg-hero-pattern'>
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}>
          <div className='flex flex-col items-center justify-center mt-5'>
            <div className='h-5 w-5 rounded-full bg-[#915eff]' />
            <div className='w-1 h-40 violet-gradient sm:h-80' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className='text-[#915eff]'>Tim</span>
            </h1>
            <p className={`${styles.heroSubText}  mt-2 text-white-100`}>
              As a dedicated full-stack developer,
              <br className='hidden sm:block' />I transform ideas into reality
              through <br className='hidden sm:block' />
              elegant code, combining precision{" "}
              <br className='hidden sm:block' />
              and enthusiasm.
            </p>
          </div>
        </div>
        <ComputersCanvas />
      </section>
    </div>
  );
}
