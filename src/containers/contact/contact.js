import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles";
import LinkButton from "components/link-button/link-button";

const { fonts, colors } = theme;

const Section = styled.section`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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

const Heading = styled.h4`
  font-family: ${fonts.primary};
  font-weight: normal;
  font-size: 5rem;
  letter-spacing: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  width: 40vw;
  font-size: 1.6rem;
  text-align: center;
  line-height: 3rem;
  color: ${colors.greyBlue};

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1.7;
  }
`;

const Wrapper = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Heading data-aos="fade-up" data-aos-duration="350" data-aos-delay="250">
        Get in touch
      </Heading>
      <Text data-aos="fade-up" data-aos-duration="350" data-aos-delay="250">
        I am always happy to consider new ideas or collaborations, or have a
        chat about a new opportunty.
      </Text>
      <Wrapper>
        <LinkButton href="mailto:glympe77@gmail.com?subject=Get%20in%20Touch">
          Mail
        </LinkButton>
        <LinkButton href="tel:+306944362386">Phone</LinkButton>
      </Wrapper>
    </Section>
  );
};

export default Contact;
