import axios, { AxiosResponse } from 'axios';
// import { convertMarkdownToHtml, sanitizeDevToMarkdown } from './markdown';
import ArticleProps from '@/types/articleType';
import { sanitizeDevToMarkdown } from './markdown';

const username = process.env.NEXT_PUBLIC_DEVTO_USERNAME;
const blogURL = 'https://blog.timdehof.dev/';
// Takes a URL and returns the relative slug to your website
export const convertCanonicalURLToRelative = (canonical: string): string =>
  canonical.replace(blogURL, '');
/* Takes the data for an article returned by the Dev.to API and:
/*  * Parses it into the IArticle interface
/*  * Converts the full canonical URL into a relative slug to be used in getStaticPaths
/*  * Converts the supplied markdown into HTML (it does a little sanitising as Dev.to allows markdown headers (##) with out a trailing space
*/

interface DevtoArticleData {
  id: number;
  title: string;
  description: string;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  cover_image: string;
  tag_list: string[];
  canonical_url: string;
  collection_id?: number;
  body_markdown: string;
}
const convertDevtoResponseToArticle = async (
  data: DevtoArticleData
): Promise<ArticleProps> => {
  try {
    let slug = convertCanonicalURLToRelative(data.canonical_url);
    const markdown = sanitizeDevToMarkdown(data.body_markdown);
    // const html = await convertMarkdownToHtml(markdown);

    // parse into article object
    const article: ArticleProps = {
      id: data.id,
      title: data.title,
      description: data.description,
      publishedAt: data.published_at,
      devToSlug: data.slug,
      devToPath: data.path,
      devToURL: data.url,
      commentsCount: data.comments_count,
      publicReactionsCount: data.public_reactions_count,
      positiveReactionsCount: data.positive_reactions_count,
      coverImage: data.cover_image,
      tags: data.tag_list,
      canonical: data.canonical_url,
      collectionId: data.collection_id || -1,
      slug,
      markdown,
      // html,
    };

    return article;
  } catch (error) {
    console.error('Error converting Dev.to response to article: ', error);
    console.error('Problematic data:', data);
    throw error;
  }
};
// Filters out any articles that are not meant for the blog page
const blogFilter = ({ canonical }) =>
  canonical && canonical.startsWith(blogURL);

export const getAllArticles = async (): Promise<ArticleProps[]> => {
  const params = { username, per_page: 1000 };
  const headers = { 'api-key': process.env.NEXT_PUBLIC_DEVTO_APIKEY };
  try {
    const { data }: AxiosResponse = await axios.get(
      'https://dev.to/api/articles/me',
      { params, headers }
    );
    const articles = await Promise.all(
      data.map(async (articleData) => {
        try {
          return await convertDevtoResponseToArticle(articleData);
        } catch (error) {
          console.error('Error processing articles:', error);
          return null;
        }
      })
    );
    return articles.filter((article) => article !== null) as ArticleProps[];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const getAllBlogArticles = async () => {
  const articles = await getAllArticles();
  articles.filter(blogFilter, articles);
  return articles;
};
export const getArticleFromCache = async (cache, slug) => {
  const article = cache.find((cachedArticle) => cachedArticle.slug === slug);
  return article ?? null;
};
