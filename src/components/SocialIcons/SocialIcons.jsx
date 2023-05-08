import React from 'react';
import styled from 'styled-components';
import SocialIconGitHub from '../SocialIconGitHub';
import SocialIconLinkedIn from '../SocialIconLinkedIn';
import SocialIconOutlook from '../SocialIconOutlook';
import DarkMode from '../DarkMode';

const SocialIconsTray = styled.div`
  display: flex;
  justify-content: space-evenly;

  button,
  svg,
  a {
    height: 38px;
    margin: 0 0.25rem;
    width: 38px;

    @media (max-width: 567px) {
      height: 24px;
      width: 24px;
    }
  }
`;

const SocialIcons = () => (
  <SocialIconsTray>
    <SocialIconGitHub />
    <SocialIconLinkedIn />
    <SocialIconOutlook />
    <DarkMode />
  </SocialIconsTray>
);

export default SocialIcons;
