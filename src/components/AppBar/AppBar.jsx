import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  SkipNavLink,
  SkipNavContent,
} from '@reach/skip-nav';
import AppBarId from '../AppBarId';
import SocialIcons from '../SocialIcons';
import {
  getThemePropShade,
  getThemePropSecondary,
  getThemePropPrimary,
} from '../Theme/utils';

const Banner = styled.header`
  align-items: center;
  background-color: #fff;
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
  position: sticky;
  top: 0;
  z-index: 1;
`;

const AppBar = () => (
  <>
    <SkipNavLink />
    <Banner role="banner">
      <Link to="/">
        <AppBarId>Mike Ibberson</AppBarId>
      </Link>
      <SocialIcons />
    </Banner>
    <SkipNavContent />
  </>
);

export default AppBar;
