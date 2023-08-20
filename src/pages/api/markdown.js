import { unified } from "unified";
import parse from "remark-parse";
import remarkHtml from "remark-html";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight/lib";
import gfm from "remark-gfm";
import matter from "gray-matter";
import stripHtmlComments from "strip-html-comments";
import { rehype } from "rehype";

// Corrects some Markdown specific to Dev.to
export const sanitizeDevToMarkdown = (markdown) => {
  let correctedMarkdown = "";

  // Dev.to sometimes turns "# header" into "#&nbsp;header"
  const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), "g");
  correctedMarkdown = markdown.replace(replaceSpaceCharRegex, " ");

  // Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
  const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g;
  return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, "$& ");
};

// Converts given markdown into HTML
// Splits the gray-matter from markdown and returns that as well
export const convertMarkdownToHtml = async (markdown) => {
  const { content } = matter(markdown);
  try {
    const html = await unified()
      .use(parse)
      .use(gfm) // Allow GitHub flavoured markdown
      .use(remarkRehype)
      .use(rehypeHighlight) // Add code highlighting
      .use(remarkHtml) // Convert to HTML
      .process(stripHtmlComments(content));
    console.log("Processed html:", html.toString());
    return html.toString();
  } catch (error) {
    console.error("Error converting markdown to HTML:", error);
    return null;
  }
};

// import { unified } from "unified";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import rehypeStringify from "rehype-stringify";
// // import * as highlight from "remark-highlight.js";
// // import gfm from "remark-gfm";
// import matter from "gray-matter";
// // import stripHtmlComments from "strip-html-comments";

// export const sanitizeDevToMarkdown = (markdown) => {
//   let correctedMarkdown = "";

//   // Dev.to sometimes turns "# header" into "#&nbsp;header"
//   const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), "g");
//   correctedMarkdown = markdown.replace(replaceSpaceCharRegex, " ");

//   // Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
//   const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g;
//   return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, "$& ");
// };

// export const convertMarkdownToHtml = async (markdown) => {
//   const { content } = matter(markdown);

//   const htmlPromise = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeStringify)
//     .process(content);
//   const html = await htmlPromise;

//   return String(html);
// };
