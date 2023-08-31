import React from 'react';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { styles } from '../styles/styles';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75) as Variants}
    className='w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]'
  >
    <p className='text-[48px] font-black text-white'>&ldquo;</p>
    <div className='mt-1 '>
      <p className='text-[18px] tracking-wider text-white'>{testimonial}</p>

      <div className='mt-7 flex items-center justify-between gap-1'>
        <div className='flex flex-1 flex-col'>
          <p className='text-[16px] font-medium text-white'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-[12px] text-secondary'>
            {designation} of {company}
          </p>
        </div>
        <Image
          src={image}
          alt={`feedback_by-${name}`}
          title={`Feedback by ${name}`}
          loading='lazy'
          width='100'
          height='100'
          className='h-10 w-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);
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
