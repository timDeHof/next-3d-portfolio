import fs from 'fs';
import Image from 'next/image';
import path from 'path';
import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { PageTitle } from '@/components';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getArticleFromCache } from '../api/devto';

const cacheFile = '.dev-to-cache.json';

type SupportedLanguage = 'javascript' | 'typescript' | 'python' | 'java';

type CustomComponents = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  code: (props: CodeProps) => JSX.Element;
};

type ArticlePageProps = {
  article: {
    coverImageDimensions: string;
    coverImage: string;
    title: string;
    markdown: string;
  };
};

const customComponents: CustomComponents = {
  code: ({ inline, className, children, style, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        PreTag='div'
        language={match[1] as SupportedLanguage}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const ArticlePage: FunctionComponent<ArticlePageProps> = ({ article }) => {
  const [imageWidth, imageHeight] = article.coverImageDimensions
    .split('x')
    .map(Number);
  return (
    <>
      <Image
        src={article.coverImage}
        alt={`cover image for ${article.title}`}
        title={article.title}
        width={imageWidth}
        height={imageHeight}
        quality={100}
        layout='responsive'
        className='xl:h-68 mx-auto h-40 sm:h-48 md:mt-6 md:h-52 lg:mt-10 lg:h-64 xl:mt-14 2xl:h-80'
      />

      <PageTitle title={article.title} center icons={false} />
      <article className='mt-10 flex w-full flex-col items-center font-light leading-relaxed'>
        <ReactMarkdown
          skipHtml={false}
          className='prose lg:prose-lg w-full max-w-none text-white md:w-5/6 xl:w-9/12'
          components={customComponents}
        >
          {article.markdown}
        </ReactMarkdown>
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
    return { props: { article } };
  } catch (error) {
    console.error('Error reading cache file:', error);
    return { notFound: true };
  }

  // Fetch the article from the cache
};

export default ArticlePage;
