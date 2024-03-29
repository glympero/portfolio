import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styles';

const { flexCenter, colors, fonts } = theme;

const LogoBox = styled.div`
  ${flexCenter}
`;

const LogoContainer = styled.div`
  ${flexCenter}
  width: 46px;
  height: 46px;
  border-radius: 4px;
  border: 1px solid ${colors.brightYellow};

  &:hover {
    background-color: ${colors.brightYellowTransparent};
  }
`;

const logo = css`
  padding: 1rem;
  text-decoration: none;
  text-align: center;
  display: block;
  color: ${colors.brightYellow};
  font-size: 1.8rem;
  font-family: ${fonts.secondary};
`;

export const Logo = (props) => {
  return (
    <LogoBox ref={props.logoRef} id='logo' {...props}>
      <LogoContainer>
        <a href='/' aria-label='navigate to home page' css={logo}>
          GL
        </a>
      </LogoContainer>
    </LogoBox>
  );
};

export default Logo;
