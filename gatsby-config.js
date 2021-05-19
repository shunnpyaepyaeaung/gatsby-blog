module.exports = {
  siteMetadata: {
    title: "Code Space Blog",
    description: "The best place to share knowledges",
    body: {
      content: "Just some SEO content",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                es6: "js",
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
