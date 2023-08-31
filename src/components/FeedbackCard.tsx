import React from 'react';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../utils/motion';

export const FeedbackCard = ({
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
