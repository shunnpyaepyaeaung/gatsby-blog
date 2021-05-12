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
    type PostContent {
      title: String
      text: String
    }

    type PostJson {
      id: ID
      title: String
      body: String
      wordCount: Int
      isActive: Boolean
      rating: Float
      tags: [String!]!
      content: PostContent
    }

    type TodoJson {
      task: String
      done: Boolean
    }

    input TitleFilter {
      eq: String,
      in: String
    }

    type StudyJson {
      title: String
      done: Boolean
      month: String
    }

    input StudyTitleFilter {
      eq: String
      inc: String
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
        resolve(source, { filter }, context, info) {
          const { title } = filter || {};
          const { eq } = title || {};
          const posts = [
            {
              id: "1",
              title: "Hello world",
              body: "My custom text",
              wordCount: 200,
              isActive: true,
              rating: 4.23,
              tags: ["React JS", "Programming", "Development"],
              content: {
                text: "My content text",
                title: "My content title",
              },
            },
            {
              id: "2",
              title: "Hello world 2",
              wordCount: 300,
              isActive: false,
              rating: 2.23,
              tags: ["Angular JS", "Programming", "Development"],
              content: {
                text: "My content text 2",
                title: "My content title 2",
              },
            },
          ];

          if (eq) {
            return posts.filter((post) => post.title === eq);
          }

          return posts;
        },
      },
      allStudyList: {
        type: ["StudyJson"],
        args: {
          filter: `input StudyFilterInput {data: StudyTitleFilter}`,
          limit: "Int",
        },
        resolve(source, { filter }, context, info) {
          const { data } = filter || {};
          const { eq, inc } = data || {};
          const studyList = [
            {
              title: "Study React JS",
              done: false,
              month: "January",
            },
            {
              title: "Study Gatsby",
              done: true,
              month: "May",
            },
            {
              title: "Study HTML",
              done: true,
              month: "January",
            },
          ];
          if (eq) {
            return studyList.filter(
              (sub) => sub.title === eq || sub.month === eq
            );
          }
          if (inc) {
            return studyList.filter((sub) => sub.title.includes(inc));
          }
          return studyList;
        },
      },
      allTodo: {
        type: ["TodoJson"],
        args: {
          filter: "Boolean",
        },
        resolve(source, args, context, info) {
          const { filter } = args;
          const todos = [
            {
              task: "to eat",
              done: false,
            },
            {
              task: "to study gatsby",
              done: true,
            },
            {
              task: "hangout",
              done: false,
            },
          ];
          if (filter) {
            return todos.filter((todo) => todo.done === filter);
          }
          return todos;
        },
      },
    },
  };
  createResolvers(resolver);
};
