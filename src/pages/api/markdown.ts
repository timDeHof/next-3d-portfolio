// import { unified } from 'unified';
// import parse from 'remark-parse';
// import remarkHtml from 'remark-html';
// import remarkRehype from 'remark-rehype';
// import rehypeHighlight from 'rehype-highlight/lib';
// import gfm from 'remark-gfm';
// import matter from 'gray-matter';
// import ReactMarkdown from 'react-markdown';
// import stripHtmlComments from 'strip-html-comments';

// Corrects some Markdown specific to Dev.to
export const sanitizeDevToMarkdown = (markdown: string): string => {
  let correctedMarkdown = '';

  // Dev.to sometimes turns "# header" into "#&nbsp;header"
  const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), 'g');
  correctedMarkdown = markdown.replace(replaceSpaceCharRegex, ' ');

  // Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
  const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g;
  return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, '$& ');
};

// Converts given markdown into HTML
// Splits the gray-matter from markdown and returns that as well
// export const convertMarkdownToHtml = async (
//   markdown: string
// ) => {
//   const { content } = matter(markdown);
//   try {
//     return <Rea> children={content} </Rea>
//   } catch (error) {
//     console.error('Error converting markdown to HTML:', error);
//     return null;
//   }
// };
