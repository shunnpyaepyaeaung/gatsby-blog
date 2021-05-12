import React from "react";
import Layout from "../components/Layout";

const anothertest = ({ pageContext }) => {
  return (
    <Layout>
      <h1>Current index is {pageContext.currentIndex}</h1>
    </Layout>
  );
};

export default anothertest;
