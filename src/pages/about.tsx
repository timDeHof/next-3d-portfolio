import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Feedbacks, Tech, ServiceCard } from '@/components';
import { styles } from '../styles/styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const AboutPage = () => (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/logo.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' href='/about' />
      <title>Tim DeHof: About</title>
      <meta name='description' content='find out more about me.' />
    </Head>

    <motion.div variants={textVariant()} className='gap-10'>
      <h1 className={`${styles.sectionSubText} text-center `}>Introduction</h1>
      <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 max-w-5xl text-[17px] leading-[30px] text-secondary'
    >
      I&apos;m a seasoned mechanical design engineer with 8 years of experience
      in the exciting field of 3D printing. However, I have recently embarked on
      a new career path after completing a rigorous coding bootcamp in web
      development last year. My unwavering passion for technology and its power
      to address real-world challenges is what truly motivates me. Since
      completing my studies, I have been dedicated to continuously expanding my
      knowledge and skills in order to stay at the forefront of this rapidly
      evolving industry. Currently, I am actively seeking opportunities in web
      development within my local area, as well as open to remote opportunities.
      I am incredibly enthusiastic about pursuing a career in web development,
      and I firmly believe that the perfect opportunity, whether local or
      remote, is just around the corner.
    </motion.p>
    <div className='my-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    <Tech />
    <Feedbacks />
  </>
);

export default SectionWrapper(AboutPage, 'About');
