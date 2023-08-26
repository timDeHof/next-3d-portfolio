import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles/styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ title, icon, iconBg, date, points, companyName }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className='flex h-full w-full items-center justify-center'>
        <Image
          src={icon}
          alt={companyName}
          title={companyName}
          loading='lazy'
          width={100}
          height={100}
          className='h-[60%] w-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-[24px] font-bold text-white'>{title}</h3>
      <p
        className='text-[16px] font-semibold text-secondary'
        style={{ margin: 0 }}
      >
        {companyName}
      </p>
    </div>
    <ul className='ml-5 mt-5 list-disc space-y-2'>
      {points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='trackingwider pl-1 text-[14px] text-white-100'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

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
