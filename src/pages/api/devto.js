import { notFound } from "next/navigation";
import axios from "axios";
import { convertMarkdownToHtml, sanitizeDevToMarkdown } from "./markdown";

const username = process.env.NEXT_PUBLIC_DEVTO_USERNAME;
const blogURL = "https://blog.timdehof.dev";
const portfolioURL = "https://timdehof.dev/";
// Takes a URL and returns the relative slug to your website
export const convertCanonicalURLToRelative = (canonical) => {
  return canonical.startsWith(portfolioURL)
    ? canonical.replace(portfolioURL, "")
    : canonical.replace(blogURL, "");
};

const convertDevtoResponseToArticle = async (data) => {
  try {
    const slug = convertCanonicalURLToRelative(data.canonical_url);
    const markdown = sanitizeDevToMarkdown(data.body_markdown);
    const html = await convertMarkdownToHtml(markdown);

    const article = {
      id: data.id,
      title: data.title,
      description: data.description,
      publishedAt: data.published_at,
      slug: data.slug,
      path: data.path,
      url: data.url,
      commentsCount: data.comments_count,
      publicReactionsCount: data.public_reactions_count,
      positiveReactionsCount: data.positive_reactions_count,
      coverImage: data.cover_image,
      tags: data.tag_list,
      canonical: data.canonical_url,
      collectionId: data.collection_id || -1,
      slug,
      markdown,
      html,
    };

    return article;
  } catch (error) {
    console.error("Error converting Dev.to response to article: ", error);
    console.error("Problematic data:", data);
  }
};

const blogFilter = ({ canonical }) => {
  return canonical && canonical.startsWith(blogURL);
};

export const getAllArticles = async () => {
  const params = { username, per_page: 1000 };
  const headers = { "api-key": process.env.NEXT_PUBLIC_DEVTO_APIKEY };
  const { data } = await axios.get("https://dev.to/api/articles/me", {
    params,
    headers,
  });
  try {
    const articles = await Promise.all(
      data.map(async (articleData) => {
        return await convertDevtoResponseToArticle(articleData);
      }),
    );
    return articles;
  } catch (error) {
    console.error("Error processing articles:", error);
    return [];
  }
};

export const getAllBlogArticles = async () => {
  const articles = await getAllArticles();
  return articles.filter(blogFilter);
};
export const getArticleFromCache = (cache, slug) => {
  const article = cache.find((cachedArticle) => cachedArticle.slug === slug);
  return article;
};
