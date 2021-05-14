import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const markdown = ({ data }) => {
  const { totalCount, nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <h4>{totalCount} Posts</h4>
      {nodes.map(({ id, frontmatter, excerpt }) => {
        return (
          <div key={id}>
            <h3>{frontmatter.title}</h3>
            <span> - {frontmatter.date}</span>
            <p>{excerpt}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default markdown;

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
      }
    }
  }
`;
