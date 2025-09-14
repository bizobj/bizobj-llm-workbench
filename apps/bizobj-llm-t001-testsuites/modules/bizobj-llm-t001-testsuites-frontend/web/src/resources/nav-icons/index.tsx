import Icon from "@ant-design/icons";

const examples = () => (
<svg viewBox="0 0 24 24" width="24" height="24"
     fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
  {/* Play triangle */}
  <path d="M8 5v14l11-7z"/>
  {/* Code brackets */}
  <path d="M2 8l-2 2 2 2M22 8l2 2-2 2"/>
</svg>
);
export const NavIconExamples = () => (
    <Icon component={examples} />
);

const example_blog_posts = () => (
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2l8 8-8 8-8-8 8-8zM4 22h16"/>
</svg>
);
export const NavIconExampleBlogPosts = () => (
    <Icon component={example_blog_posts} />
);

const example_categories = () => (
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>
</svg>
);
export const NavIconExampleCategories = () => (
    <Icon component={example_categories} />
);
