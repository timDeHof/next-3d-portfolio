import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { ProjectCard } from '../components/ProjectCard';

const Works = () => (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/logo.svg' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000' />
      <link rel='canonical' href='/work' />
      <title>Tim DeHof: Works</title>
      <meta name='description' content='checkout my latest projects.' />
    </Head>
    <motion.div variants={textVariant()}>
      <h1 className={`${styles.sectionSubText} text-center`}>My work</h1>
      <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
    </motion.div>
    <div className='flex w-full'>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-3 max-w-5xl text-[17px] leading-[30px] text-secondary'
      >
        Following projects showcase my skills and experience through real-world
        examples of my work.
        <br className='hidden sm:block' /> Each project is briefly described
        with links to code repositories and live demos in it.
        <br className='hidden sm:block' /> It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, 'work');
