// dato.config.js

module.exports = (dato, root, i18n) => {
  root.createPost("content/post/my-post.md", "yaml", {
    frontmatter: {
      title: "First article",
      type: "post",
      categories: ["random"],
      weight: 4,
      date: "2012-04-06",
    },
    content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
  });
}