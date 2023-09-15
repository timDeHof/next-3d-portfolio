import React from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const fadeInShort = (
  direction = 'top',
  type = 'tween',
  delay = 0.2,
  duration = 0.5
) => ({
  hidden: { opacity: 0, y: direction === 'top' ? -50 : 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type,
      delay,
      duration,
    },
  },
});
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-auto xs:w-[250px]'>
    <motion.div
      variants={fadeInShort('right', 'spring', 0.5 * index, 0.75)}
      className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
    >
      <div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5'>
        <Image
          src={icon}
          title={title}
          alt={title}
          loading='lazy'
          width={100}
          height={100}
          className='h-16 w-16 object-contain'
        />
        <h3 className='text-center text-[20px] font-bold text-white'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
