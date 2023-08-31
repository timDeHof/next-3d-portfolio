import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import Head from 'next/head';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles/styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { ExperienceCard } from '../components/ExperienceCard';

const Experience = () => (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/logo.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000' />
      <link rel='canonical' href='/experience' />
      <title>Tim DeHof: Experience</title>
      <meta name='description' content='View my work experience.' />
    </Head>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Work Experience.
      </h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} {...experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, 'Work');
