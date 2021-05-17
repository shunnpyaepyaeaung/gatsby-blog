import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "./blog.scss";

const blog = ({ data, pageContext: { slug } }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;
  return (
    <Layout>
      <h1>{title}</h1>
      <div className="blog-content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default blog;

export const query = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
