import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "styles/index";
import { useStaticQuery, graphql } from "gatsby";

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
    <Section id="education">
      <Grid>
        <Title
          data-aos="fade-down"
          data-aos-duration="350"
          data-aos-delay="500"
        >
          Education
        </Title>
      </Grid>
      <div className="container">
        <div id="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2>UNIVERSITY OF HERTFORDSHIRE - 2015</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="subheading">MSc Computer Science</h3>
                  <h5 className="subheading">First Class - With Distinction</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Final Project: An investigation on how the
                    Model-View-Controller architectural pattern and the Web
                    Forms model affect the development of a database-driven web-
                    based application.
                  </p>
                  <p className="text-muted">
                    Modules: Introduction to Programming (100%), Object-Oriented
                    Programming (100%), Software Development Tools and Methods
                    (84%), Wireless, Mobile and Ad-hoc Networking (69%),
                    Software Engineering Practice and Experience (81%), Web
                    Scripting and Application Development (89%)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right">
              <h2>STAFFORDSHIRE UNIVERSITY - 2002</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="subheading">BSc Music Technology</h3>
                  <h5>Upper Second-Class Honours Degree</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Final Project: An investigation into Hardware and Software
                    for implementation into a Digital Audio Workstation.
                  </p>
                  <p className="text-muted">
                    Modules: Analogue and Digital Electronics, Circuit Analysis,
                    Audio Components and Systems, Acoustics and Studio Design,
                    Digital Signal Processing, Engineering Applications, Music
                    Technology, Advanced Recording Techniques, Mathematics for
                    Acoustic &amp; Audio, Video Productions, MIDI, Speech and
                    Music Technology, Business Planning and Set-up, Music
                    Composition, Live Sound Technology
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2>MUSIC SCHOOL OF IONIA - 1995 & 1998</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="subheading">
                    Harmony &amp; Counterpoint Diploma
                  </h3>
                  <h5>Grade - Excellent</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right">
              <h2>THE UNIVERSITY OF MICHIGAN - 1998</h2>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Certificate of Proficiency in English</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
