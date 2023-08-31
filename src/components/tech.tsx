import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { TechnologiesCard } from './TechnologiesCard';

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
