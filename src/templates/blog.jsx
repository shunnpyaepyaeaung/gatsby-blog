import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "./blog.scss";
import Seo from "../components/Seo";

const blog = ({ data }) => {
  const {
    html,
    frontmatter: { title, subtitle, cover },
  } = data.markdownRemark;
  return (
    <Layout>
      <Seo title={title} description={subtitle} image={cover} />
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
        subtitle
        cover
      }
    }
  }
`;
