import fs from 'fs';
import path from 'path';
import { getAllBlogArticles } from '../pages/api/devto';

const cacheFile = '.dev-to-cache.json';

export const updateCache = async () => {
  const articles = await getAllBlogArticles();
  fs.writeFileSync(
    path.join(process.cwd(), cacheFile),
    JSON.stringify(articles)
  );
};
