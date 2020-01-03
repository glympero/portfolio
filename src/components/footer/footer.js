import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles";
import GithubIcon from "components/icons/github";
import TwitterIcon from "components/icons/twitter";
import LinkedInIcon from "components/icons/linkedin";

const { colors, fonts } = theme;

const FooterTag = styled.footer`
  width: 100%;
  height: 10rem;
  background: ${colors.maastrichtBlue};
  display: grid;
  grid-template-rows: 1fr min-content;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

const List = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 30rem;

  @media screen and (max-width: 600px) {
    width: 20rem;
  }
`;

const SocialLink = styled.a`
  display: inline-block;

  & > svg {
    fill: ${colors.brightYellow};
    width: 30px;
    transition: all 250ms ease-out;
  }

  &:hover > svg {
    transform: rotate(-15deg);
    opacity: 0.8;
  }
`;

const Copyright = styled.p`
  font-family: ${fonts.primary};
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

const Footer = () => {
  return (
    <FooterTag>
      <List>
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/george-lymperopoulos-398a6551/"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon width="64" />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="https://github.com/glympero"
            aria-label="GitHub Profile"
          >
            <GithubIcon width="64" />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="https://twitter.com/lympero"
            aria-label="Twitter Profile"
          >
            <TwitterIcon width="64" />
          </SocialLink>
        </li>
      </List>
      <Copyright>Copyright &copy; Georgios Lymperopoulos {new Date().getFullYear()}</Copyright>
    </FooterTag>
  );
};

export default Footer;
