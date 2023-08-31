import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { staggerContainer } from '../utils/motion';

interface SectionWrapperProps {
  [key: string]: string;
  className: string;
}

const SectionWrapper = (
  Component: React.ComponentType<SectionWrapperProps>,
  sectionId: string
) => {
  const HOC = ({ className, ...props }: SectionWrapperProps) => (
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
      <Component className={''} {...props} />
    </motion.section>
  );
  return HOC;
};

export default SectionWrapper;
