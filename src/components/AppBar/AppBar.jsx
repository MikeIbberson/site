import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import AppBarId from '../AppBarId';
import SocialIcons from '../SocialIcons';

const Banner = styled.header`
  align-items: center;
  background-color: #fff;
  border-top: 6px solid;
  border-image: linear-gradient(
      139deg,
      #c7ffed,
      #015958,
      #023535
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
  <Banner role="banner">
    <Link to="/">
      <AppBarId>Mike Ibberson</AppBarId>
    </Link>
    <SocialIcons />
  </Banner>
);

export default AppBar;
