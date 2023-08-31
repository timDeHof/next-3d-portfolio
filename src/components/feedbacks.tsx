import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { styles } from '../styles/styles';
import { FeedbackCard } from './FeedbackCard';

const Feedbacks = () => (
  <div className='mt-12 flex flex-col justify-evenly rounded-[20px] bg-black-100'>
    <div className={`${styles.padding} min-h-[280px] rounded-2xl bg-tertiary`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
    </div>
    <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={`test-${index}`} index={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default Feedbacks;
// export default SectionWrapper(Feedbacks, "");
