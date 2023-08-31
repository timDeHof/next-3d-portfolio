import React from 'react';
import { motion } from 'framer-motion';
import { StarsCanvas } from '@/components';
import { styles } from '../styles/styles';
import { staggerContainer } from '../utils/motion';

interface StarWrapperProps {
  className: string;
  [key: string]: string;
}

const StarWrapper = (
  Component: React.ComponentType<StarWrapperProps>,
  sectionId: string
) => {
  const HOC = ({ className, ...props }: StarWrapperProps) => (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} mx-auto flex max-w-7xl flex-col`}
    >
      <span className='hash-span' id={sectionId}>
        &nbsp;
      </span>
      <div className='relative z-0'>
        <StarsCanvas />
        <Component className={''} {...props} />
      </div>
    </motion.section>
  );
  return HOC;
};

export default StarWrapper;
