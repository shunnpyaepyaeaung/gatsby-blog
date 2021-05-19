module.exports = {
  options: {
    feeds: [
      {
        serialize: ({ query: { allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(({ node }) => {
            const url = `${process.env.BASE + URL}/blogs/${node.slug}`;
            return Object.assign({}, node.frontmatter, {
              description: node.subtitle,
              url,
              guid: url,
              custom_elements: [{ "content:encoded": node.html }],
            });
          });
        },
        query: `
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
          ) {
            edges {
              node {
                html
                frontmatter {
                  title
                  subtitle
                  slug
                  date
                }
              }
            }
          }
        }
      `,
        title: "Code Space News",
        output: "/rss.xml",
      },
    ],
  },
};
