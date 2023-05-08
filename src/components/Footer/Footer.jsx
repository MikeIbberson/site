import React from 'react';
import styled from 'styled-components';
import {
  getThemePropContrast,
  getThemePropPrimary,
  getThemePropShade,
  getThemePropSecondary,
} from '../Theme/utils';

const Container = styled.footer`
  background: linear-gradient(
    139deg,
    ${getThemePropShade()},
    ${getThemePropSecondary()},
    ${getThemePropPrimary}
  );

  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: -120px;
  padding: 0 1rem;
  padding-top: calc(120px + 2rem);
`;

const Attribution = styled.small`
  display: block;
  font-size: 0.7rem;
  padding: 4rem 0 1rem;
  text-align: center;
  width: 100%;

  a:not(:last-of-type)::after {
    content: '·';
    padding: 0 0.5rem;
  }
`;

const Link = styled.a`
  font-family: 'Karla', sans-serif;
  font-size: 3.25vw;
  white-space: nowrap;
`;

const Offset = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
`;

const Shape = styled.svg`
  height: 120px;
  fill: ${getThemePropContrast()};
  transform: rotate(180deg);
  width: 100%;
`;

const Footer = () => (
  <Offset>
    <Shape
      preserveAspectRatio="none"
      viewBox="0 0 1440 590"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0,600 C 0,600 0,300 0,300 C 84.14354066985646,363.7894736842105 168.28708133971293,427.5789473684211 249,408 C 329.7129186602871,388.4210526315789 406.9952153110048,285.4736842105263 524,277 C 641.0047846889952,268.5263157894737 797.7320574162678,354.52631578947364 903,354 C 1008.2679425837322,353.47368421052636 1062.0765550239234,266.42105263157896 1143,243 C 1223.9234449760766,219.57894736842104 1331.9617224880383,259.7894736842105 1440,300 C 1440,300 1440,600 1440,600 Z"
        stroke="none"
        strokeWidth="0"
        fillOpacity="1"
      />
    </Shape>
    <Container>
      <Link href="mailTo:michael.anthony.ibberson@gmail.com">
        <span>michael.anthony.ibberson@gmail.com</span> 🤙
      </Link>
      <Attribution>
        <a
          target="_blank"
          href="https://icons8.com/icon/13930/linkedin"
          rel="noreferrer"
        >
          LinkedIn by Icons8
        </a>
        <a
          target="_blank"
          href="https://icons8.com/icon/63777/github"
          rel="noreferrer"
        >
          GitHub by Icons8
        </a>
        <a
          target="_blank"
          href="https://icons8.com/icon/13640/microsoft-outlook"
          rel="noreferrer"
        >
          Microsoft Outlook by Icons8
        </a>
        <a
          target="_blank"
          href="https://devicon.dev/"
          rel="noreferrer"
        >
          Tech icons by DevIcon
        </a>
        <a
          target="_blank"
          href="https://svgwave.in/"
          rel="noreferrer"
        >
          Dividers by SvgWave
        </a>
        <a
          target="_blank"
          href="https://www.shapedivider.app/"
          rel="noreferrer"
        >
          Dividers by ShapeDivider
        </a>
      </Attribution>
    </Container>
  </Offset>
);

export default Footer;
