import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  SkipNavLink,
  SkipNavContent,
} from '@reach/skip-nav';
import AppBarId from '../AppBarId';
import DarkMode from '../DarkMode';
import SocialIcons from '../SocialIcons';
import {
  getThemePropShade,
  getThemePropSecondary,
  getThemePropPrimary,
  getThemePropContrast,
} from '../Theme/utils';

const Banner = styled.header`
  align-items: center;
  background-color: ${getThemePropContrast()};
  border-top: 6px solid;
  border-image: linear-gradient(
      139deg,
      ${getThemePropShade()},
      ${getThemePropSecondary()},
      ${getThemePropPrimary()}
    )
    3;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  z-index: 1;
`;

const Tray = styled.div`
  display: flex;
  align-items: center;
`;

const AppBar = () => (
  <>
    <SkipNavLink />
    <Banner role="banner">
      <Link to="/">
        <AppBarId>Mike Ibberson</AppBarId>
      </Link>
      <Tray>
        <DarkMode />
        <SocialIcons />
      </Tray>
    </Banner>
    <SkipNavContent />
  </>
);

export default AppBar;
