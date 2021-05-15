import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogListing from "../components/BlogListing";

export default function Index({ data }) {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="columns">
        {nodes.slice(0, 2).map((node) => {
          return (
            <div className="column" key={node.id}>
              <FeaturedBlog blog={node} />
            </div>
          );
        })}
      </div>
      <div className="p-4">
        <BlogListing blogs={nodes} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          slug
          subtitle
          author
        }
      }
    }
  }
`;
