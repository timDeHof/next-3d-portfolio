import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { convertCanonicalURLToRelative } from '@/pages/api/devto';
import { fadeIn } from '../utils/motion';

export const BlogPostCard = ({
  title,
  canonical,
  coverImage,
  description,
  tags,
  index,
}) => (
  <motion.div variants={fadeIn('', 'spring', index * 0.5, 0.75)}>
    <Tilt className='w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]'>
      <Link href={`/blog/${convertCanonicalURLToRelative(canonical)}`}>
        <div className='flex h-[230px] w-full'>
          {coverImage && (
            <Image
              src={coverImage}
              alt={title}
              title={title}
              width={360}
              height={202.5}
              className='h-auto w-full rounded-2xl object-cover'
            />
          )}
        </div>
        <div className='mt-5'>
          <h3 className='text-[24px] font-bold text-white'>{title}</h3>
          <p className='mt-2 text-[14px] text-secondary'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${title}-${tag}`} className='text-[14px] text-white-100'>
              #{tag}
            </p>
          ))}
        </div>
      </Link>
    </Tilt>
  </motion.div>
);
