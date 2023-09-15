'use client';

import React from 'react';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/lib/constants';
import { textVariant } from '@/lib/utils/motion';
import { styles } from '@/styles/styles';
import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperiencePage = () => {
  return (
    <section
      className={`${styles.padding} mt32 mx-auto flex max-w-7xl flex-col`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default ExperiencePage;
