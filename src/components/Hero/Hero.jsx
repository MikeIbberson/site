import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeroImage from '../HeroImage';
import {
  getThemePropShade,
  getThemePropPrimary,
  getThemePropSecondary,
  getThemePropContrast,
} from '../Theme/utils';
import useScroller from '../useScroller';

const Section = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  max-width: 100%;
  padding: 2rem;
  width: 1420px;

  svg {
    width: 55%;
  }

  > div {
    width: 40%;
  }

  a {
    margin-right: 1rem;
  }

  svg > g {
    opacity: 0;
    transform-origin: center;
  }

  svg > g:nth-of-type(1) {
    animation-delay: 100ms !important;
  }

  svg > g:nth-of-type(2) {
    animation-delay: 200ms !important;
  }

  svg > g:nth-of-type(3) {
    animation-delay: 600ms !important;
  }

  .button {
    background-image: linear-gradient(
      90deg,
      ${getThemePropSecondary()},
      ${getThemePropPrimary()}
    );

    border: 3px solid transparent;
    border-radius: 22px;
    color: ${getThemePropContrast()};
    display: inline-block;
    font-weight: bold;
    line-height: 2.5rem;
    height: 2.5rem;
    margin-top: 0.5rem;
    padding: 0 1.5rem;
    transition: border-color 320ms;

    &:hover,
    &:focus {
      outline: 0;
      border-color: ${getThemePropShade()};
    }
  }

  .scroller.inview ~ svg > g {
    animation: heroshapes 550ms ease-in;
    animation-fill-mode: forwards;
  }

  @media (max-width: 767px) {
    div,
    svg {
      width: 100%;
    }

    svg {
      margin-top: 2rem;
      max-width: 480px;
    }
  }

  @media (max-width: 600px) {
    svg {
      margin-top: 4rem;
      transform: scale(1.3);
    }
  }

  @keyframes heroshapes {
    from {
      opacity: 0;
      transform: translateY(40px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Hero = ({ children }) => {
  const { className, ref } = useScroller();

  return (
    <Section ref={ref}>
      <div className={className}>{children}</div>
      <HeroImage />
    </Section>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
