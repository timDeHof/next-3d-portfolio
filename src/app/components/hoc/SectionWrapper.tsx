import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/styles/styles';
import { staggerContainer, StaggerTransition } from '@/lib/utils/motion';

const INITIAL_STATE = 'hidden';
const WHILE_IN_VIEW_STATE = 'show';

export interface SectionWrapperProps {
  [key: string]: string | object;
  hidden: object;
  show: {
    transition: StaggerTransition;
  };
}

/**
 * Higher-order component (HOC) that wraps a given component with additional functionality related to motion and styling.
 * Provides animation and styling properties to the wrapped component.
 * @param Component - A React component that will be wrapped with additional functionality.
 * @param sectionId - A string representing the ID of the section.
 * @returns The wrapped component with motion and styling properties.
 */
const SectionWrapper = (
  Component: React.ComponentType<SectionWrapperProps>,
  sectionId: string
) => {
  /**
   * Higher-order component (HOC) function that takes in additional props and renders a `motion.section` component.
   * The `Component` is rendered inside the `motion.section` component.
   * @param className - The class name for the wrapped component.
   * @param props - Additional props for the wrapped component.
   * @returns The wrapped component with motion and styling properties.
   */
  const HOC = ({ className, ...props }: SectionWrapperProps) => (
    <motion.section
      variants={staggerContainer()}
      initial={INITIAL_STATE}
      whileInView={WHILE_IN_VIEW_STATE}
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
