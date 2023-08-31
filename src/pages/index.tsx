import React from 'react';
import Image from 'next/image';
import { styles } from '../styles/styles';
import { ComputersCanvas } from '../components/canvas';

const Home = () => (
  <div
    className={`p-18 flex min-h-screen flex-col items-center justify-between `}
  >
    <section className='relative mx-auto h-screen w-full bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 z-[-1]'>
        <Image src={'/herobg.png'} fill quality={100} alt='Background Image' />
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]' />
          <div className='violet-gradient h-40 w-1 sm:h-80' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white-100`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Tim</span>
          </h1>
          <p className={`${styles.heroSubText}  mt-2 text-white-100`}>
            As a dedicated full-stack developer,
            <br className='hidden sm:block' />I transform ideas into reality
            through <br className='hidden sm:block' />
            elegant code, combining precision <br className='hidden sm:block' />
            and enthusiasm.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  </div>
);

export default Home;
