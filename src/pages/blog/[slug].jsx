import fs from "fs";
import path from "path";
import moment from "moment";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllBlogArticles, getArticleFromCache } from "../api/devto";
import Image from "next/image";
import { PageTitle } from "@/components";
const cacheFile = ".dev-to-cache.json";

const ArticlePage = ({ article }) => (
  <>
    <Image
      src={article.coverImage}
      alt={`cover image for ${article.title}`}
      title={article.title}
      width={360}
      height={202.5}
      quality={100}
      className='h-40 mx-auto md:mt-6 lg:mt-10 xl:mt-14 sm:h-48 md:h-52 lg:h-64 xl:h-68 2xl:h-80'
    />

    <PageTitle title={article.title} center icons={false} />
    <section className='flex flex-col items-center w-full mt-10 font-light leading-relaxed'>
      <article
        className='w-full prose text-white max-w-none lg:prose-lg md:w-5/6 xl:w-9/12'
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </section>
  </>
);

export const getStaticProps = async ({ params }) => {
  // Read cache and parse to object
  let cacheContents;
  try {
    cacheContents = fs.readFileSync(
      path.join(process.cwd(), cacheFile),
      "utf-8",
    );
  } catch (error) {
    console.error("Error reading cache file:", error);
    return { notFound: true };
  }
  const cache = JSON.parse(cacheContents);

  // Fetch the article from the cache
  const article = await getArticleFromCache(cache, params.slug);
  return { props: { article } };
};

export async function getStaticPaths() {
  // Get the published articles and cache them for use in getStaticProps().
  const articles = await getAllBlogArticles();

  // Save articles data to cache file
  fs.writeFileSync(
    path.join(process.cwd(), cacheFile),
    JSON.stringify(articles),
  );

  // Get the paths we want to pre-render based on posts
  const paths = articles.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  // we'll pre-render only these paths at build time.
  // {fallback: false} means other routes should 404.
  return { paths, fallback: false };
}

export default ArticlePage;
// const { slug } = params;
// console.log("slug from API:", slug);
// // const normalizedSlug = slug.replace("/", "");
// // console.log("normalized slug:", normalizedSlug);
// let cacheContents;
// try {
//   cacheContents = fs.readFileSync(
//     path.join(process.cwd(), cacheFile),
//     "utf-8",
//   );
// } catch (error) {
//   console.error("Error reading cache file:", error);
//   return { notFound: true };
// }

// let cache;
// try {
//   cache = JSON.parse(cacheContents);
// } catch (error) {
//   console.error("Error parsing cache JSON:", error);
//   return { notFound: true };
// }
// const article = await getArticleFromCache(cache, slug);
// if (!article) {
//   console.error("No article data fetched for slug:", slug);
//   return { notFound: true };
// }

// if (!article || !article.publishedAt) {
//   console.error("Article not found or missing data for slug:", slug);
//   return { notFound: true };
// }
// if (!article || !article.coverImage) {
//   console.error("Article not found or missing coverImage for slug:", slug);
//   return { notFound: true };
// }
// let publishedDate;
// try {
//   publishedDate = moment(article.publishedAt).format("Do MMMM YYYY");
// } catch (error) {
//   console.error("Error formatting published date:", error);
//   return { notFound: true };
// }
// return {
//   props: { article, publishedDate },
// };
// };

// export const getStaticPaths = async () => {
//   const articles = await getAllBlogArticles();
//   fs.writeFileSync(
//     path.join(process.cwd(), cacheFile),
//     JSON.stringify(articles),
//   );
//   // console.log("articles: ", articles);
//   const paths = articles.map(({ slug }) => {
//     return {
//       params: { slug },
//     };
//   });
//   return { paths, fallback: true };
// };
