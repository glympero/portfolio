import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles/index";

const { colors, fonts } = theme;

const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`;

const Grid = styled.div`
  background: ${colors.maastrichtBlue};
  display: grid;
  grid-template-columns: 1fr 50%;

  @media screen and (max-width: 920px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-family: ${fonts.primary};
  font-size: 5rem;
  font-weight: normal;
  letter-spacing: 0.8rem;
  margin-bottom: 2.5rem;
  grid-row: 1/2;
  justify-self: center;

  @media screen and (max-width: 920px) {
    margin-bottom: 2rem;
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
    font-size: 3.5rem;
  }
`;

const Education = () => {
  return (
    <Section id="workExperience">
      <Grid>
        <Title
          data-aos="fade-down"
          data-aos-duration="350"
          data-aos-delay="500"
        >
          Work Experience
        </Title>
      </Grid>
      <div className="container">
        <div id="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2>SENIOR FULL STACK DEVELOPER</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="subheading">Civic UK</h3>
                  <h5>September 2018 – Today</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Working on improving and expanding an internal tool for Amazon Partner Network –
                    https://aws.amazon.com/partners/. Using React – Redux and RoR.
                  </p>
                  <p className="text-muted">
                    Creating the frontend in a web application for managing online car rentals in Greece
                    which includes a landing page, the dashboard management system for customers
                    https://admin-stage.simplybook.com/ and payments with stripe.
                  </p>
                  <p className="text-muted">
                    Team size: 4.
                  </p>
                  <p className="text-muted">
                    Technologies: React, Redux, Redux-Thunk, Rest API, Drupal Modules, Wordpress Plugins, Flexbox, ES6, GitLab.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right">
              <h2>SENIOR REACT FRONTEND DEVELOPER</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="subheading">Boosted Boards</h3>
                  <h5 className="subheading">September 2017 – September 2018</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Maintaining, optimizing and adding features to Boosted Boards website.
                  </p>
                  <p className="text-muted">
                    Team size: 10+
                  </p>
                  <p className="text-muted">
                    Technologies: React, Apollo, GraphQL, Contentfull, Shopify, Node, Scrum
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2>REACT-NATIVE DEVELOPER</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="subheading">
                    KeyBee Hosting 
                  </h3>
                  <h5>February 2016 – September 2018</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Managing and adding new content to a published application to Apple and Play store
                    which provides services to Airbnb hosts. Also, contributing to design decision,
                    solutions and architectural improvements.
                  </p>
                  <p className="text-muted">
                    The application includes a complex link system with Airbnb which simulates the login
                    process (captcha, two step verification (call-text or email)) in order to get a verified
                    account and connect it with the application.
                  </p>
                  <p className="text-muted">
                    Team size: 10 (2 Developers).
                  </p>
                  <p className="text-muted">
                    Technologies: React, React-Native, Redux, Redux-Thunk, ES6.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right">
              <h2>REACT FRONTEND DEVELOPER</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>SimplyBook</h3>
                  <h5>December 2016 – Today</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Contributing to design decision, solutions and architectural improvements.
                  </p>
                  <p className="text-muted">
                    Creating the frontend in a web application for managing online car rentals in Greece
                    which includes a landing page, the dashboard management system for customers
                    https://admin-stage.simplybook.com/ and payments with stripe.
                  </p>
                  <p className="text-muted">
                    Team size: 4
                  </p>
                  <p className="text-muted">
                    Technologies: React, Redux, Redux-Thunk, Flexbox, ES6, GitLab.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2>TEACHING ASSISTANT / INSTRUCTOR</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Matacode LLC</h3>
                  <h5>January 2017 – January 2019</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Teaching Assistant at “The Complete MySQL Developer Course” (Udemy.com).
                    Managing content, providing solutions for students in the QA section.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="timeline-item">*/}
          {/*  <div className="timeline-icon"></div>*/}
          {/*  <div className="timeline-content right">*/}
          {/*    <h2>ANGULAR FRONTEND DEVELOPER</h2>*/}
          {/*    <div className="timeline-panel">*/}
          {/*      <div className="timeline-heading">*/}
          {/*        <h3 className="subheading">*/}
          {/*          KeyBee Hosting */}
          {/*        </h3>*/}
          {/*        <h5>February 2018 – September 2019</h5>*/}
          {/*      </div>*/}
          {/*      <div className="timeline-body">*/}
          {/*        <p className="text-muted">*/}
          {/*          Managing and adding new content to a published application to Apple and Play store*/}
          {/*          which provides services to Airbnb hosts. Also, contributing to design decision,*/}
          {/*          solutions and architectural improvements.*/}
          {/*        </p>*/}
          {/*        <p className="text-muted">*/}
          {/*          The application includes a complex link system with Airbnb which simulates the login*/}
          {/*          process (captcha, two step verification (call-text or email)) in order to get a verified*/}
          {/*          account and connect it with the application.*/}
          {/*        </p>*/}
          {/*        <p className="text-muted">*/}
          {/*          Team size: 10 (2 Developers).*/}
          {/*        </p>*/}
          {/*        <p className="text-muted">*/}
          {/*          Technologies: React, React-Native, Redux, Redux-Thunk, ES6.*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="timeline-item">*/}
          {/*  <div className="timeline-icon"></div>*/}
          {/*  <div className="timeline-content">*/}
          {/*    <h2>TEACHING ASSISTANT / INSTRUCTOR</h2>*/}
          {/*    <div className="timeline-panel">*/}
          {/*      <div className="timeline-heading">*/}
          {/*        <h3>Matacode LLC</h3>*/}
          {/*        <h5>January 2017 – January 2019</h5>*/}
          {/*      </div>*/}
          {/*      <div className="timeline-body">*/}
          {/*        <p className="text-muted">*/}
          {/*          Teaching Assistant at “The Complete MySQL Developer Course” (Udemy.com).*/}
          {/*          Managing content, providing solutions for students in the QA section.*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </div>
    </Section>
  );
};

export default Education;
