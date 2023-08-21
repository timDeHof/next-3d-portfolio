import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles/styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import {
  getAllBlogArticles,
  convertCanonicalURLToRelative,
} from "@/pages/api/devto";
import Link from "next/link";
import Image from "next/image";
const BlogPostCard = ({
  title,
  canonical,
  slug,
  coverImage,
  description,
  tags,
  index,
}) => {
  return (
    <motion.div variants={fadeIn("", "Spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='w-full p-5 rounded-2xl bg-tertiary sm:w-[360px]'>
        <Link href={`/blog/${convertCanonicalURLToRelative(canonical)}`}>
          <div className='h-[230px] w-full flex'>
            {coverImage && (
              <Image
                src={coverImage}
                alt={title}
                title={title}
                width={360}
                height={202.5}
                className='object-cover w-full h-auto rounded-2xl'
              />
            )}
          </div>
          <div className='mt-5'>
            <h3 className='text-[24px] font-bold text-white'>{title}</h3>
            <p className='mt-2 text-[14px] text-secondary'>{description}</p>
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            {tags.map((tag) => (
              <p key={`${title}-${tag}`} className='text-[14px]'>
                #{tag}
              </p>
            ))}
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};
const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/logo.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
        className={`${styles.padding} flex flex-col mx-auto max-w-7xl`}>
        <span className='hash-span'>&nbsp;</span>
        <motion.div variants={textVariant()} className='text-center'>
          <p className={`${styles.sectionSubText} text-center`}>
            What I Write about
          </p>
          <h1 className={`${styles.sectionHeadText} text-center`}>Blog.</h1>
        </motion.div>
        <div className='flex flex-wrap mt-10 gap-7'>
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
};
export default Blog;

export async function getStaticProps() {
  let articles = await getAllBlogArticles();

  if (!articles) {
    return {
      notFound: {},
    };
  }

  return {
    props: { articles },
  };
}
