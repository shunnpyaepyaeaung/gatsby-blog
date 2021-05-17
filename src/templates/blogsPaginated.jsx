import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import BlogListing from "../components/BlogListing";

const blogsPaginated = ({ pageContext, data }) => {
  const { limit, currentPage, numOfPages } = pageContext;
  const { nodes } = data.allMarkdownRemark;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <Layout>
      <BlogListing blogs={nodes} />
      <Link className="button is-small" to={`/blogs/${prevPage}`} rel="prev">
        Previous
      </Link>{" "}
      <Link className="button is-small" to={`/blogs/${nextPage}`} rel="next">
        Next
      </Link>
    </Layout>
  );
};

export default blogsPaginated;

export const query = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          slug
          subtitle
          title
        }
      }
    }
  }
`;
