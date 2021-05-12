import React from "react";
import Layout from "../components/Layout";

const test = ({ pageContext: { testing } }) => {
  return (
    <Layout>
      <h1>Shunn testing</h1>
      <p>{testing}</p>
    </Layout>
  );
};

export default test;
