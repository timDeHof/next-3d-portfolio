import fs from "fs";
import moment from "moment";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { getAllBlogArticles, getArticleFromCache } from "../api/devto";
import Image from "next/image";

const cacheFile = ".dev-to-cache.json";

export default function Page({ article, publishedDate }) {
  console.log("article", article);
  return (
    <>
      {article.coverImage && (
        <Image
          src={article.coverImage}
          alt={`cover of ${article.title}`}
          title={article.title}
          width={0}
          height={0}
          layout='responsive'
          className='object-cover w-full h-auto rounded-2xl'
        />
      )}
      <p className='w-full my-4 italic leading-relaxed text-center text-gray-600'>
        {publishedDate}
      </p>
      <section className='flex flex-col items-center w-full mt-6 font-light leading-relaxed'>
        <article
          className='w-full text-white lg:prose-lg md:w-5/6 xl:w-9/12'
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </section>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  // console.log("slug from params", slug);
  const cacheContents = fs.readFileSync(
    path.join(process.cwd(), cacheFile),
    "utf-8",
  );
  let fixedSlug = "/" + slug;
  const cache = JSON.parse(cacheContents);

  const article = await getArticleFromCache(cache, fixedSlug);

  const publishedDate = moment(article.publishedAt).format("Do MMMM YYYY");
  return {
    props: { article, publishedDate },
  };
};

export const getStaticPaths = async () => {
  const articles = await getAllBlogArticles();
  fs.writeFileSync(
    path.join(process.cwd(), cacheFile),
    JSON.stringify(articles),
  );
  // console.log("articles: ", articles);
  const paths = articles.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: true };
};
