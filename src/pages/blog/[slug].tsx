import fs from 'fs';
import path from 'path';
import React from 'react';
import Image from 'next/image';
import { PageTitle } from '@/components';
import { getArticleFromCache } from '../api/devto';

const cacheFile = '.dev-to-cache.json';

const ArticlePage = ({ article }) => (
  <>
    <Image
      src={article.coverImage}
      alt={`cover image for ${article.title}`}
      title={article.title}
      width={360}
      height={202.5}
      quality={100}
      className='xl:h-68 mx-auto h-40 sm:h-48 md:mt-6 md:h-52 lg:mt-10 lg:h-64 xl:mt-14 2xl:h-80'
    />

    <PageTitle title={article.title} center icons={false} />
    <section className='mt-10 flex w-full flex-col items-center font-light leading-relaxed'>
      <article
        className='prose lg:prose-lg w-full max-w-none text-white md:w-5/6 xl:w-9/12'
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </section>
  </>
);

export const getServerSideProps = async ({ params }) => {
  // Read cache and parse to object
  let cacheContents;
  try {
    cacheContents = fs.readFileSync(
      path.join(process.cwd(), cacheFile),
      'utf-8'
    );
  } catch (error) {
    console.error('Error reading cache file:', error);
    return { notFound: true };
  }
  const cache = JSON.parse(cacheContents);

  // Fetch the article from the cache
  const article = await getArticleFromCache(cache, params.slug);
  return { props: { article } };
};

export default ArticlePage;
