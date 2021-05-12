const axios = require("axios");

exports.createPages = async ({ actions: { createPage } }) => {
  //fetching data
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;
  createPage({
    path: "/posts",
    component: require.resolve("./src/templates/posts.jsx"),
    context: { posts },
  });
  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.id}`,
      component: require.resolve("./src/templates/post.jsx"),
      context: { post },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type PostJson {
      id: ID
      title: String
      body: String
    }

    input TitleFilter {
      eq: String,
      in: String
    }
  `;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolver = {
    Query: {
      allPost: {
        type: ["PostJson"],
        args: {
          filter: `input PostFilterInput {title: TitleFilter}`,
          limit: "Int",
        },
        async resolve(source, { filter }, context, info) {
          const { title } = filter || {};
          const { eq } = title || {};
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const posts = res.data;

          if (eq) {
            return posts.filter((post) => post.title === eq);
          }

          return posts;
        },
      },
    },
  };
  createResolvers(resolver);
};
