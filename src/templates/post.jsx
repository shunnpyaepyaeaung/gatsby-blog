import React from "react";
import Layout from "../components/Layout";

const post = ({ pageContext: { post } }) => {
  return (
    <Layout>
      <h1>Post Detail Page</h1>
      <p>ID : {post.id}</p>
      <p>TITLE : {post.title}</p>
      <p>BODY : {post.body}</p>
    </Layout>
  );
};

export default post;
