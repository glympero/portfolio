import React from "react";
import styled from "@emotion/styled";
import Project from "components/project/project";
import { theme } from "styles/index";

const { fonts, colors } = theme;

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
  margin-bottom: 5.5rem;
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

const DescTitle = styled.h5`
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${fonts.primary};
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: ${colors.white};
`;

const CardText = styled.p`
  font-family: ${fonts.secondary};
  font-size: 1.5rem;
  line-height: 2;
  text-align: left;
  color: ${colors.white};
  margin: 0;
  width: 100%;

  br {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${colors.maastrichtBlue};
  }

  @media screen and (max-width: 900px) {
    font-size: 1.4rem;

    br {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    line-height: 1.5;
  }
`;

const Work = () => {
  return (
    <Section id="work">
      <Grid>
        <Title
          data-aos="fade-right"
          data-aos-duration="350"
          data-aos-delay="500"
        >
          Portfolio
        </Title>
        </Grid>
        <Grid>
      <Project
        originalMacMockupPhotoName="curo-macbook-mockup.png"
        title="Gender Pay Gap"
        subtitle="Web Application"
        card={CuroCard}
      />
      <Project
        originalMacMockupPhotoName="hunter-macbook-mockup.png"
        title="Hunter Adams"
        subtitle="Web Application"
        card={HunterCard}
      />
      <Project
        originalMacMockupPhotoName="dsa-macbook-mockup.png"
        title="AWS Partner"
        subtitle="Web Application"
        card={DSACard}
      />
      <Project
        originalMacMockupPhotoName="space-macbook-mockup.png"
        title="Space Guardians | EU"
        subtitle="Web Application"
        card={SpaceCard}
      />
      <Project
        originalMacMockupPhotoName="boosted-macbook-mockup.png"
        title="Boosted Boards"
        subtitle="Web Application"
        card={BoostedCard}
      />
      <Project
        originalMacMockupPhotoName="meet-macbook-mockup.png"
        title="Meet Greek"
        subtitle="Ionic 2 Application"
        card={MeetGreekCard}
      />
      </Grid>
    </Section>
  );
};

export default Work;

const BoostedCard = (
  <>
    <DescTitle>Boosted Boards</DescTitle>
    <CardText>
      <a href="https://boostedboards.com/" target="_blank" rel="noopener noreferrer">Boosted </a>
      is on a mission to make cities feel smaller, campuses more accessible, 
      and commutes more enjoyable with high-quality electric skateboards & scooters.
      My work involved:
      <br />
      • Develop new features for web-app using React, Redux, GraphQL, Apollo and ContentFull.
      <br />
      • Migrate the codebase from class based to functional components with React Hooks.
      <br />
      • Migrate style libraries from global SCSS/Bootstrap to a modern
      architecture using CSS Modules and CSS-in-JS.
      <br />• Build reusable code and libraries for future use.
      <br />• Ensure the technical feasibility of UI/UX designs.
      <br />• Improved test coverage by adding tests for old features.
    </CardText>
  </>
);
const CuroCard = (
  <>
    <DescTitle>Gender Pay Gap | Curo</DescTitle>
    <CardText>
      <a href="https://curogpg.com/" target="_blank" rel="noopener noreferrer">CuroGPG </a> 
      is a complete solution for UK gender pay gap compliance, insights and forecasts.
      This simple self service solution helps support companies who need to comply with the Gender Pay Gap Information Regulations and wish to understand the issues driving their Pay Gap.
      My work involved:
      <br />
      • Built the web-app using React, Redux, REST, Material Design, HighCharts.
      <br />
      • Unit Testing using Enzyne and Jest
      <br />
      • Create interactive charts for displaying gpg difference including Line, Area, Bar, Pie and Bubble Charts.
    </CardText>
  </>
);

const HunterCard = (
  <>
    <DescTitle>Hunter Adamns | HR</DescTitle>
    <CardText>
    <a href="https://hunteradams.co.uk/" target="_blank" rel="noopener noreferrer">Hunter Adams </a> 
      is a UK leading HR consultancy offering all HR services regardless of client headcount or location in the UK.
      My work involved:
      <br />
      • Develop a custom Wordpress theme by converting Adobe XD Designs using ACF, React, Wordpress REST API.
      <br />
      • Develop a custom plugin 
      <a href="https://wordpress.org/plugins/civic-social-feeds/" target="_blank" rel="noopener noreferrer"> Civic Social Feeds </a> 
      in order to retrieve and display social feeds from Twitter, Facebook and Instagram.
    </CardText>
  </>
);

const DSACard = (
  <>
    <DescTitle>AWS Partner Transformation Program</DescTitle>
    <CardText>
      Public Sector Partner Transformation Program (PTP), 
      is a Ruby on Rails program that supports partner development and accelerates partners’ transition towards an optimal AWS Cloud reseller business model.
      My work involved:
      <br />
      • Update users login - roles process where each user can have more that one roles (Sales Manager, Admin, dsa, ptp).
      <br />
      • Migrate all views with React and Redux.
    </CardText>
  </>
);

const SpaceCard = (
  <>
    <DescTitle>Interactive eBooks for Improving Astronomy Literacy of Kids</DescTitle>
    <CardText>
    Co-funded by the Erasmus+ programme of the European Union, SpaceGuardians consists of two interactive, innovative and user friendly books
    that can be used in various settings for Astronomy education by teachers/trainers, STEM educators, schools and parents for raising interest over STEM.
      My work involved:
      <br />
      • Develop the interactive books with React, Redux and Turn.js library.
      <br />
      • Develop interactive mini games presented in various pages of the book.
      <br />
      <a href="https://spaceguardians.eu/interactive-book" target="_blank" rel="noopener noreferrer">BOOK 1 </a>
      <br />
      <a href="https://spaceguardians.eu/interactive-book-2" target="_blank" rel="noopener noreferrer">BOOK 2 </a>
    </CardText>
  </>
);

const MeetGreekCard = (
  <>
    <DescTitle>Meet Greek</DescTitle>
    <CardText>
    Ionic 2 application for both IOS and Android platforms. This is a location based real-time chat app.
      My work involved:
      <br />
      • Develop the application by using Firebase as backend, Facebook login for authentication, image capture and uploading to firebase.
    </CardText>
  </>
);
