import { css } from "@emotion/core";
import theme from "./theme";
const { colors, fonts } = theme;
export default css`
  /* Box sizing rules */
  :root,
  html {
    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul,
  ol,
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a,
  a:visited,
  a:link {
    text-decoration: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* CUSTOM STYLES BEGINS HERE: */
  ::selection {
    background-color: ${colors.brightYellow};
  }

  body {
    background-color: ${colors.maastrichtBlue};
    color: ${colors.white};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.primary};
    font-weight: normal;
  }

  p {
    font-family: ${fonts.secondary};
    font-weight: normal;
    font-size: 2rem;
  }

  /**
 * Scroll bar
 */
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colors.maastrichtBlueTransparent};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.brightYellowTransparent};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.brightYellow};
  }
  #timeline .timeline-item:after, #timeline .timeline-item:before {
    content: '';
    display: block;
    width: 100%;
    clear: both;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
  
  #timeline {
    width: 100%;
    margin: 30px auto;
    position: relative;
    padding: 0 10px;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  #timeline:before {
    content: "";
    width: 3px;
    height: 100%;
    background: ${colors.brightYellow};
    left: 50%;
    top: 0;
    position: absolute;
  }
  #timeline:after {
    content: "";
    clear: both;
    display: table;
    width: 100%;
  }
  #timeline .timeline-item {
    margin-bottom: 50px;
    position: relative;
  }
  #timeline .timeline-item .timeline-icon {
    background: ${colors.brightYellow};
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    margin-left: -23px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
  }
  #timeline .timeline-item .timeline-icon svg {
    position: relative;
    top: 14px;
    left: 14px;
  }
  #timeline .timeline-item .timeline-content {
    width: 45%;
    background: #fff;
    padding: 20px;
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  #timeline .timeline-item .timeline-content h2 {
    padding: 15px;
    background: ${colors.grey};
    color: ${colors.white};
    margin: -20px -20px 0 -20px;
    font-weight: 300;
    -webkit-border-radius: 3px 3px 0 0;
    -moz-border-radius: 3px 3px 0 0;
    -ms-border-radius: 3px 3px 0 0;
    border-radius: 3px 3px 0 0;
  }
  #timeline .timeline-item .timeline-content:before {
    content: '';
    position: absolute;
    left: 45%;
    top: 20px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid ${colors.grey};;
  }
  #timeline .timeline-item .timeline-content.right {
    float: right;
  }
  #timeline .timeline-item .timeline-content.right:before {
    content: '';
    right: 45%;
    left: inherit;
    border-left: 0;
    border-right: 7px solid ${colors.grey};
  }

  .timeline-panel {
    padding: 20px;
    color: ${colors.maastrichtBlue};
    h3 {
      font-size: 1.8rem;
    }
    h5 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 2rem;
      padding-bottom: 10px;
      font-family: ${fonts.secondary}
    }
  }
  
  @media screen and (max-width: 768px) {
    #timeline {
      margin: 30px;
      padding: 0px;
      width: 90%;
    }
    #timeline:before {
      left: 0;
    }
    #timeline .timeline-item .timeline-content {
      width: 90%;
      float: right;
    }
    #timeline .timeline-item .timeline-content:before, #timeline .timeline-item .timeline-content.right:before {
      left: 10%;
      margin-left: -6px;
      border-left: 0;
      border-right: 7px solid ${colors.grey};
    }
    #timeline .timeline-item .timeline-icon {
      left: 0;
    }
  }
`;
