import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { getAllBlogArticles } from '@/pages/api/devto';
import { textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles/styles';
import ArticleProps from '../types/articleType';
import { BlogPostCard } from '../components/BlogPostCard';

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
