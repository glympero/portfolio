import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styles/index';

const { colors, fonts } = theme;

const Section = styled.section`
  width: 100%;
  padding: 0 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 1400px) {
    padding: 0 10rem;
  }

  @media screen and (max-width: 900px) {
    display: block;
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
  grid-template-columns: 1fr 30%;
  grid-template-rows: min-content 400px;
  grid-gap: 2.5rem;

  @media screen and (max-width: 920px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const GridTitle = styled.div`
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

const AboutGrid = styled.article`
  grid-row: 2/3;
  grid-column: 1/2;
  width: 100%;
  justify-self: center;
  position: relative;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 60px 60px 1fr;
  grid-gap: 2rem;

  @media screen and (max-width: 920px) {
    grid-row: 2/3;
    order: 2;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: min-content 1fr;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/4;
  align-self: flex-start;

  @media screen and (max-width: 600px) {
    grid-column: 1/4;
    grid-row: 2/3;
  }
`;

const Text = styled.p`
  display: block;
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  line-height: 1.7;
  text-align: left;
  margin-bottom: 1rem;
  text-align: justify;
`;

const HighLight = styled.span`
  /* text-decoration-line: underline;
  text-decoration-color: ${colors.brightYellow};
  text-decoration-style: double; */
  color: ${colors.white};
  border-bottom: 1px solid ${colors.brightYellow};
`;

const Figure = styled.figure`
  width: 100%;
  grid-row: 2/3;
  grid-column: 2/3;

  /* The AOS custom animation needs to be in a parent container */
  [data-aos='about-frame'] {
    transform: rotate(-90deg);

    &.aos-animate {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
    margin-bottom: 10rem;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 8rem;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 30rem;
`;

const Frame = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  padding: 3.5rem;
  border: 10px solid ${colors.brightYellow};
  width: 25rem;
  height: 25rem;
  z-index: 95;

  @media screen and (max-width: 920px) {
  }

  @media screen and (max-width: 600px) {
    top: 20%;
    left: 30%;
    width: 20rem;
    height: 20rem;
  }
`;

const imgeStyle = css`
  width: 25rem;
  max-width: 100%;
  position: relative;
  z-index: 100;
  filter: contrast(140%) grayscale(100%);

  @media screen and (max-width: 600px) {
    width: 20rem;
    margin: 0 auto;
  }
`;

const tabButtonStyle = css`
  width: 8.5rem;
  padding: 1rem 0;
  outline: none;
  border: none;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  justify-self: flex-start;
  align-self: flex-start;
  transition: all 250ms ease-out;

  &:hover {
    border-bottom: 2px solid ${colors.brightYellow};
  }
`;

const IntroButton = styled.button`
  ${tabButtonStyle}
  grid-row: 1/2;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${(props) =>
      props.activeText === INTRO ? colors.brightYellow : 'transparent'};

  @media screen and (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

const JourneyButton = styled.button`
  ${tabButtonStyle}
  grid-row: 2/3;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${(props) =>
      props.activeText === JOURNEY ? colors.brightYellow : 'transparent'};

  @media screen and (max-width: 600px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const PresentButton = styled.button`
  ${tabButtonStyle}
  grid-row: 3/4;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${(props) =>
      props.activeText === LEARNING ? colors.brightYellow : 'transparent'};
  @media screen and (max-width: 600px) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
`;

const INTRO = 'INTRO';
const JOURNEY = 'JOURNEY';
const LEARNING = 'LEARNING';

const About = () => {
  const [activeText, setActiveText] = useState(INTRO);

  const renderActiveParagraph = (tab) => {
    switch (tab) {
      case INTRO:
        return (
          <TextWrapper>
            <Text>
              I attended the University of Staffordshire, achieving a{' '}
              <HighLight>Bachelor's degree in Music Technology</HighLight> and
              the University of Herfordshire, achieving a{' '}
              <HighLight>
                Master's degree with distinction in Computer Science
              </HighLight>
              .
            </Text>
            <Text>
              I appreciate a good challenge, always achieve my goals and meet or
              exceed deadlines. I work well within a team environment and I have
              the dedication and work ethic to work solo. I take pride in
              maintaining high standards and look forward to future
              opportunities.
            </Text>
          </TextWrapper>
        );
      case JOURNEY:
        return (
          <TextWrapper>
            <Text>
              I have a strong understanding of JavaScript and the way the
              language works under the hood, along with an excellent
              understanding of how Web Browser works, which allows me to quickly
              adapt to new tools and technologies.
            </Text>
            <Text>
              Furthermore, I work with a variety of framework and libraries and
              I like experiment outside of work with the latest tech, to ensure
              I am always abreast of the industry's innovations.
            </Text>
            <Text>
              Along with a robust experience in using HTML5, CSS (SCSS,
              styled-component, CSS Modules) and understanding Web Performances,
              the list of tools I consider myself proficient in using includes
              React (Hooks and Functional Component Composition), Redux (Thunk,
              Saga and Observables), TypeScript, GraphQL, Apollo, Gatsby.js,
              Node, Express. I prefer Jest and React Testing Library for Unit
              Testing and I am keen to learn and use Cypress in a commercial
              environment.
            </Text>
          </TextWrapper>
        );
      case LEARNING:
        return (
          <TextWrapper>
            <Text>
              From the beginning of my new career, I have spent the majority of
              my free time to not only improve and consolidate my knowledge of
              the building blocks of the web (HTML, CSS, JavaScript, Browser
              Compatibility, Web Performance and Web Security, Accessibility)
              but I have also spent a large amount of time learning and
              experimenting with modern framework, languages and libraries
              (React, Angular, Redux, GraphQL, PHP, Node, Apollo, Drupal,
              Symphony, Wordpress).
            </Text>
            <Text>
              I constantly keep myself up to date with the latest innovation in
              Front End Development and in the JavaScript ecosystem, using
              different media such as Twitter, Medium, dev.to, CSS Tricks,
              Frontend Masters, etc.
            </Text>
            <Text>
              <HighLight>
                I strongly believe that learning is a life-long process that is
                essential to an Engineer’s success{' '}
              </HighLight>
              in delivering software the reflects the best standard of the
              industry
            </Text>
          </TextWrapper>
        );
      default:
        return 'Error retrieving the selected option, reload the page ...';
    }
  };

  return (
    <div id='about'>
      <GridTitle>
        <Title
          data-aos='fade-down'
          data-aos-duration='350'
          data-aos-delay='500'
        >
          About me
        </Title>
      </GridTitle>
      <Section>
        <Grid>
          <AboutGrid>
            {renderActiveParagraph(activeText)}
            <IntroButton
              onClick={() => setActiveText(INTRO)}
              activeText={activeText}
            >
              Intro
            </IntroButton>
            <JourneyButton
              onClick={() => setActiveText(JOURNEY)}
              activeText={activeText}
            >
              Skills
            </JourneyButton>
            <PresentButton
              onClick={() => setActiveText(LEARNING)}
              activeText={activeText}
            >
              Learning
            </PresentButton>
          </AboutGrid>
          <Figure>
            <ImgContainer>
              <Frame
                data-aos='about-frame'
                data-aos-duration='750'
                data-aos-delay='300'
              />
              <StaticImage
                src='../../images/profilepic.jpg'
                alt='Profile Picture of Georgios Lymperopoulos'
                placeholder='blurred'
                layout='fixed'
                width={250}
                height={302}
                css={imgeStyle}
              />
            </ImgContainer>
          </Figure>
        </Grid>
      </Section>
    </div>
  );
};

export default About;
