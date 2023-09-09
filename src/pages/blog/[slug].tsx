import fs from 'fs';
import Image from 'next/image';
import path from 'path';
import React, { FunctionComponent } from 'react';
import {
  H1,
  H2,
  H3,
  CodeBlock,
  Ul,
  Ol,
  Li,
  A,
  Img,
  P,
} from '@/components/MDXComponents';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import { serialize } from 'next-mdx-remote/serialize';
import { PageTitle } from '@/components';
import { SectionWrapperProps } from '@/hoc/SectionWrapper';
import { getArticleFromCache } from '../api/devto';
import { SectionWrapper } from '../../hoc';

const cacheFile = '.dev-to-cache.json';

interface ArticlePageProps extends SectionWrapperProps {
  article: {
    coverImage: string;
    title: string;
    markdown: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  code: CodeBlock,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: A,
  img: Img,
  p: P,
};

const ArticlePage: FunctionComponent<ArticlePageProps> = ({
  article,
  mdxSource,
}) => {
  const { coverImage, title } = article;
  return (
    <>
      <Image
        src={coverImage}
        alt={`cover image for ${title}`}
        title={title}
        sizes='(max-width: 768px) 100vw, 50vw'
        priority
        width={600}
        height={400}
        quality={80}
        className='mx-auto h-auto w-full max-w-3xl'
      />

      <PageTitle title={title} center icons={false} />
      <article className='mt-10 flex w-full flex-col items-center font-light leading-relaxed text-white'>
        <MDXProvider components={components}>
          <MDXRemote {...mdxSource} />
        </MDXProvider>
      </article>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  // Read cache and parse to object
  try {
    const cacheContents = fs.readFileSync(
      path.join(process.cwd(), cacheFile),
      'utf-8'
    );
    const cache = JSON.parse(cacheContents);
    const article = await getArticleFromCache(cache, params.slug);

    // Serialize the markdown to MDX
    const markdownString: string = article.markdown as string;

    const matterResult = matter(markdownString);
    const mdxSource = await serialize(matterResult.content);

    return { props: { article, mdxSource } };
  } catch (error) {
    console.error('Error reading cache file:', error);
    return { notFound: true };
  }
  // Fetch the article from the cache
};

export default SectionWrapper(ArticlePage, '');
