import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
const Seo = ({ title, description, meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const defaultTitle = title
    ? `${title} | ${site.siteMetadata?.title}`
    : site.siteMetadata?.title;
  const defaultDescription = description || site.siteMetadata?.description;
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={defaultTitle}
      meta={[
        {
          name: "description",
          content: defaultDescription,
        },
        {
          name: "og:title",
          content: defaultTitle,
        },
        {
          name: "og:description",
          content: defaultDescription,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og: image",
          content:
            "https://content.techgig.com/thumb/msid-79110796,width-860,resizemode-4/5-Strongest-reasons-for-non-programmers-to-learn-coding.jpg?58220",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: "Code Space",
        },
        {
          name: "twiiter:title",
          content: defaultTitle,
        },
        {
          name: "twiiter:description",
          content: defaultDescription,
        },
        {
          name: "twitter: image",
          content:
            "https://content.techgig.com/thumb/msid-79110796,width-860,resizemode-4/5-Strongest-reasons-for-non-programmers-to-learn-coding.jpg?58220",
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
