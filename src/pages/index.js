import React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Hero from "containers/hero/hero";
import About from "containers/about/about";
import Education from "containers/education/education";
import WorkExperience from "containers/workExperience/workExperience";
import Contact from "containers/contact/contact";
import Work from "containers/work/work";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Work />
        <Education />
        <WorkExperience />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
