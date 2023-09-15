import React from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { github, link } from '@/lib/assets';
import { fadeIn } from '@/lib/utils/motion';
import Link from 'next/link';

export const ProjectCard = ({
  index,
  id,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  demoLink,
}) => (
  <Tilt className=' w-full xs:w-[350px]'>
    <Link href={`/work/${id}`}>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        className='green-pink-gradient h-full w-full rounded-[20px] p-[1px] shadow-card'
      >
        <div className='flex h-full flex-col items-center justify-start rounded-[20px] bg-tertiary p-5'>
          <Image
            src={image}
            alt={name}
            title={`image of ${name}`}
            width={500}
            height={500}
            quality={100}
            className='h-full w-full rounded-2xl object-cover'
          />
          <div className='card-img_hover absolute inset-0 m-3 flex justify-end gap-2'>
            <button
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className='black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
            >
              <Image
                src={github}
                alt='github'
                title='github'
                width={40}
                height={40}
                className='mb-0 h-5 w-5'
              />
            </button>
            <button
              onClick={() => window.open(demoLink, '_blank')}
              className='green-pink-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
            >
              <Image
                src={link}
                alt='demo link'
                title='demo link'
                width={100}
                height={100}
                className='mb-0 h-5 w-5'
              />
            </button>
          </div>

          <div className='mt-5'>
            <h3 className='text-[24px] font-bold text-white'>{name}</h3>
            <p className='mt-2 text-[14px] text-secondary'>{description}</p>
            <p className='mt-2 text-[14px] text-white'>Read more</p>
          </div>
          <div className='mt-5 flex w-full flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  </Tilt>
);
