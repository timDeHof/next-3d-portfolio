'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/styles/styles';
import SectionWrapper from '@/components/hoc/SectionWrapper';
import { projects } from '@/lib/constants';
import { fadeIn, textVariant } from '@/lib/utils/motion';
import { ProjectCard } from '@/components/ProjectCard';

const WorksPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionSubText} text-center`}>My work</h1>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>
      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mx-auto mt-3 max-w-4xl text-left text-[17px] leading-[30px] text-secondary'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work.
          <br className='hidden sm:block' /> Each project is briefly described
          with links to code repositories and live demos in it.
          <br className='hidden sm:block' /> It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${project.id}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(WorksPage, 'work');
