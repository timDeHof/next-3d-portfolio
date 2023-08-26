import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { staggerContainer } from '../utils/motion';

interface SectionWrapperProps {
  [key: string]: string;
}

const SectionWrapper = (
  Component: React.ComponentType<SectionWrapperProps>,
  idName: string
) => {
  const HOC = (props: SectionWrapperProps) => (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} mx-auto flex max-w-7xl flex-col`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      <Component {...props} />
    </motion.section>
  );
  return HOC;
};

export default SectionWrapper;
