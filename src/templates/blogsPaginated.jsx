import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import BlogListing from "../components/BlogListing";
import Seo from "../components/Seo";

const blogsPaginated = ({ pageContext, data }) => {
  const { currentPage, numOfPages } = pageContext;
  const { nodes } = data.allMarkdownRemark;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <Layout>
      <Seo
        title="Blogs"
        description="Fresh Code Space blogs about technology"
      />
      <BlogListing blogs={nodes} />
      <Link
        disabled={isFirst}
        className="button is-dark is-small"
        to={`/blogs/${prevPage}`}
        rel="prev"
      >
        Previous
      </Link>{" "}
      <Link
        disabled={isLast}
        className="button is-dark is-small"
        to={`/blogs/${nextPage}`}
        rel="next"
      >
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
        id
        frontmatter {
          slug
          subtitle
          title
          date(formatString: "DD MMMM, YYYY")
          author
        }
      }
    }
  }
`;
