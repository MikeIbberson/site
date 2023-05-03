import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {
  getThemePropPrimary,
  getThemePropSecondary,
  getThemePropShade,
  getThemePropContrast,
} from './utils';

const themeDefs = {
  dark: {},
  light: {
    primary: '#023535',
    secondary: '#015958',
    shade: '#c7ffed',
    contrast: '#fff',
  },
};

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  p {
    font-size: 1rem;
  }

  img,svg {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${getThemePropPrimary()};
    font-family: 'Karla', sans-serif;
    letter-spacing: -px;
    line-height: 0.85;
    margin: 0;
  }

  h1 {
    font-size: 2.986rem;
    white-space: nowrap;

    & ~ .leadin {
      font-weight: bold;
    }
  }

  h2 {
    display: inline-block;
    font-size: 2.488rem;
    margin-bottom: 2rem;
    position: relative;

    span {
      display: inline-block;
    }

    span::before,
    span::after {
      background-color: ${getThemePropShade()};
      content: '';
      display: block;
      height: 4px;
      position: absolute;
      width: 0.694rem;
    }

    span::before {
      bottom: -12px;
      left: -0.694rem;
    }

    span::after {
      right: -0.694rem;
      top: -12px;
    }
  }

  h3 {
    font-size: 1.728rem;
  }

  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  .leadin {
    font-size: 1.44rem;
    margin: 0;
  }

  .gradient  {
    -webkit-background-clip: text;
    background-image: linear-gradient(15deg, ${getThemePropShade()},${getThemePropSecondary()}, ${getThemePropPrimary()}, ${getThemePropShade()});
    color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;

    & span {
      text-decoration: underline;
    }
  }

  @media (max-width: 1187px) {
     .leadin {
       font-size: 1.2rem;
    }
  }

  @media (max-width: 992px) {
    body, html {
      font-size: 16px;
    }

    h1 {
      font-size: 2.488rem;
    }

    h2 {
      font-size: 1.728rem;
    }

    h3 {
      font-size: 1.44rem;
    }

    h4, .leadin {
      font-size: 1.2rem;
    }

    h5 {
      font-size: 1rem;
    }

    h6 {
      font-size: 0.833rem;
    }    
  }

  @media (max-width: 769px) {
    h1 {
      font-size: 2.074rem;
      margin-bottom: 0.5rem;
    }
  }

  .scroller > div > * {
    opacity: 0;
    position: relative;
    transform-origin: center;
    transform: translateY(10px);
    transition: opacity, transform 550ms ease-in;

    &::after {
      background: ${getThemePropContrast()};
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 550ms;
    }

    &:nth-child(0),
    &:nth-child(0)::after {
      transition-delay: 100ms;
    }
    &:nth-child(1),
    &:nth-child(1)::after {
      transition-delay: 200ms;
    }
    &:nth-child(2),
    &:nth-child(2)::after {
      transition-delay: 300ms;
    }
    &:nth-child(3),
    &:nth-child(3)::after {
      transition-delay: 400ms;
    }
    &:nth-child(4),
    &:nth-child(4)::after {
      transition-delay: 500ms;
    }
  }

  .inview > div > * {
      opacity: 1;
      transform: none;

      &::after {
        transform: translateY(100%) scale(1, 0);
      }
    }
  }

   [data-reach-skip-nav-link] {
      background-color: ${getThemePropContrast()};
      display: block;
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: -1;
      padding: 1rem;
      text-align: center;
      font-weight: bold;
      font-size: 1rem;

      &:focus {
        z-index: 2;
      }
    }
 
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={themeDefs.light}>
    <GlobalStyle whiteColor />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
