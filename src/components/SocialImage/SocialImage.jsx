import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SocialImageInstagram from '../SocialImageInstagram';
import SocialImageSpotify from '../SocialImageSpotify';
import SocialImageStrava from '../SocialImageStrava';

const Size = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 230px;
  }
`;

const SocialImage = ({ network }) => {
  const Component =
    {
      instagram: SocialImageInstagram,
      spotify: SocialImageSpotify,
      strava: SocialImageStrava,
    }[network] ||
    function () {
      // eslint-disable-next-line
      console.warn(
        `No social image for ${network} available.`,
      );
    };

  return (
    <Size>
      <Component />
    </Size>
  );
};

SocialImage.propTypes = {
  network: PropTypes.oneOf([
    'instagram',
    'spotify',
    'strava',
  ]).isRequired,
};

export default SocialImage;
