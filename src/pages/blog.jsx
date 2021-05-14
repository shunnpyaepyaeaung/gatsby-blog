import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

const blog = ({ data }) => {
  const posts = data.allFile.nodes;
  console.log(posts);
  return (
    <Layout>
      <h1>Blog Page</h1>
      <div>
        {posts.map((post) => {
          return (
            <ul>
              <li>
                <b>Birthtime : </b>
                {post.birthTime}
              </li>
              <li>
                <b>Relative Path : </b>
                {post.relativePath}
              </li>
              <li>
                <b>Pretty Size : </b>
                {post.prettySize}
              </li>
              <li>
                <b>Extension : </b>
                {post.extension}
              </li>
            </ul>
          );
        })}
      </div>
    </Layout>
  );
};

export default blog;

export const query = graphql`
  query {
    allFile {
      nodes {
        birthTime(fromNow: true)
        relativePath
        prettySize
        extension
      }
    }
  }
`;
