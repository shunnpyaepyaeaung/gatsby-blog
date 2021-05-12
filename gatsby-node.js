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
  createPage({
    path: "/test",
    component: require.resolve("./src/templates/test.jsx"),
    context: { testing: "Shunn testing" },
  });
  for (var i = 1; i <= 5; i++) {
    createPage({
      path: `/anothertest/${i}`,
      component: require.resolve("./src/templates/anothertest.jsx"),
      context: { currentIndex: i },
    });
  }
};

exports.createSchemaCustomization = () => {};

exports.createResolvers = ({ createResolvers }) => {
  const resolver = {
    Query: {
      allPost: {
        type: ["PostJson"],
        resolve() {
          console.log("Hitting the query");
          return [
            {
              title: "Hello world",
              body: "My custom text",
            },
            {
              title: "Hello world 2",
              body: "My custom text 2",
            },
          ];
        },
      },
    },
  };
  createResolvers(resolver);
};
