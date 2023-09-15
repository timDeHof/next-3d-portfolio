'use client';

import React from 'react';
import { ExperienceCard } from '@/components/ExperienceCard';
import SectionWrapper from '@/components/hoc/SectionWrapper';
import { experiences } from '@/lib/constants';
import { textVariant } from '@/lib/utils/motion';
import { styles } from '@/styles/styles';
import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperiencePage = () => {
  return (
    <>
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
    </>
  );
};
export default SectionWrapper(ExperiencePage, 'Work');
