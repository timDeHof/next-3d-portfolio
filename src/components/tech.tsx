import React from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface Technology {
  name: string;
  icon: string;
}

interface TechnologiesCardProps {
  index: number;
  heading: string;
  subHeading: string;
  tech: Technology[];
}

const TechnologiesCard = ({
  index,
  heading,
  subHeading,
  tech,
}: TechnologiesCardProps) => (
  <Tilt className='w-auto xs:w-[350px]'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
    >
      <div className='flex min-h-[280px] flex-col items-center justify-start gap-5 rounded-[20px] bg-tertiary p-5'>
        <div className='flex flex-col items-center'>
          <h3 className='text-[18px] font-bold tracking-wider text-white'>
            {heading}
          </h3>
          <p className='mt-2 text-[14px] tracking-wider text-secondary'>
            {subHeading}
          </p>
        </div>
        <div className='mx-auto grid grid-cols-2 items-center gap-4 px-4'>
          {tech.map(({ name, icon }) => (
            <div
              key={`technology-${name}`}
              className='flex flex-row gap-4 text-secondary'
            >
              <Image
                src={icon}
                alt={name}
                title={name}
                loading='lazy'
                width={100}
                height={100}
                className='h-5 w-5 object-contain'
              />
              <span className='text-[12px]'>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>What I work with</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
    </motion.div>

    <div className='mt-10 flex flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <TechnologiesCard
          key={technology.heading}
          index={index}
          {...technology}
        />
      ))}
    </div>
  </>
);

export default Tech;
// export default SectionWrapper(Tech, "");
