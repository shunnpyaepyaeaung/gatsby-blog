import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

const about = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn more about Code space methodology"
      />
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>{data.site.siteMetadata.body.content}</h1>
    </Layout>
  );
};

export default about;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
`;
