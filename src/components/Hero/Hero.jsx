import React from 'react';
import styled from 'styled-components';
import HeroImage from '../HeroImage';

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

  @media (max-width: 768px) {
    div,
    svg {
      width: 100%;
    }
  }
`;

// eslint-disable-next-line
const Hero = ({ children }) => (
  <Section>
    <div>
      {children}
      <p>
        <a href="#">
          <span>My resume</span>
        </a>
      </p>
    </div>
    <HeroImage />
  </Section>
);

export default Hero;
