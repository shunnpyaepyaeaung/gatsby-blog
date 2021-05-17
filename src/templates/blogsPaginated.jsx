import React from "react";
import { graphql } from "gatsby";

const blogsPaginated = ({ pageContext }) => {
  const { limit, currentPage, numOfPages } = pageContext;
  return (
    <>
      <div>Items per page : {limit}</div>
      <div>Current page : {currentPage}</div>
      <div>Total number of pages : {numOfPages}</div>
    </>
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
