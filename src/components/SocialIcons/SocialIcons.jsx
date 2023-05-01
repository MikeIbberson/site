import React from 'react';
import styled from 'styled-components';
import SocialIconGitHub from '../SocialIconGitHub';
import SocialIconLinkedIn from '../SocialIconLinkedIn';
import SocialIconOutlook from '../SocialIconOutlook';

const SocialIconsTray = styled.div`
  display: flex;

  svg {
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
  </SocialIconsTray>
);

export default SocialIcons;
