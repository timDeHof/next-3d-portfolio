import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import Tilt from 'react-parallax-tilt';
import {
  getAllBlogArticles,
  convertCanonicalURLToRelative,
} from '@/pages/api/devto';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles/styles';
import ArticleProps from '../types/articleType';

const BlogPostCard = ({
  title,
  canonical,
  coverImage,
  description,
  tags,
  index,
}) => (
  <motion.div variants={fadeIn('', 'Spring', index * 0.5, 0.75)}>
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

const Blog = ({ articles }) => (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/logo.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000' />
      <link rel='canonical' href='/blog' />
      <title>Tim DeHof: Blog</title>
      <meta name='description' content='View my blog posts.' />
    </Head>
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} mx-auto flex max-w-7xl flex-col`}
    >
      <span className='hash-span'>&nbsp;</span>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={`${styles.sectionSubText} text-center`}>
          What I Write about
        </p>
        <h1 className={`${styles.sectionHeadText} text-center`}>Blog.</h1>
      </motion.div>
      <div className='mt-10 flex flex-wrap gap-7'>
        {articles ? (
          articles.map((article, index) => (
            <BlogPostCard key={article.id} index={index} {...article} />
          ))
        ) : (
          <div>no articles found</div>
        )}
      </div>
    </motion.section>
  </>
);

export default Blog;

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ articles: ArticleProps[] }>
> => {
  let articles = await getAllBlogArticles();

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    props: { articles },
  };
};
