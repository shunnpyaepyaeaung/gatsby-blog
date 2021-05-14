import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

const testing = ({ data }) => {
  const posts = data.allPost.nodes;
  return (
    <Layout>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default testing;

export const query = graphql`
  query AllPost {
    allPost {
      nodes {
        id
        title
      }
    }
  }
`;
