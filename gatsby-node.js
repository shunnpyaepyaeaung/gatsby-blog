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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type PostJson {
      id: ID
      title: String
      body: String
      wordCount: Int
      isActive: Boolean
      rating: Float
    }
    type TodoJson{
      task: String
      done: Boolean
    }
  `;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolver = {
    Query: {
      allPost: {
        type: ["PostJson"],
        resolve() {
          console.log("Hitting the query");
          return [
            {
              id: "1",
              title: "Hello world",
              body: "My custom text",
              wordCount: 200,
              isActive: true,
              rating: 4.23,
            },
            {
              id: "2",
              title: "Hello world 2",
              body: "My custom text 2",
              wordCount: 300,
              isActive: false,
              rating: 2.23,
            },
          ];
        },
      },
      allTodo: {
        type: ["TodoJson"],
        resolve() {
          console.log("todo testing");
          return [
            {
              task: "to eat",
              done: false,
            },
            {
              task: "to study gatsby",
              done: true,
            },
          ];
        },
      },
    },
  };
  createResolvers(resolver);
};
