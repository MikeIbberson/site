import React from 'react';
import { map, size } from 'lodash';
import styled from 'styled-components';
import Image from 'gatsby-image';

const Gallery = styled.div`
  margin: 1rem 0 0;
  position: relative;
  width: 100%;
`;

const Slide = styled.div`
  background-color: #f6fafd;
  border-radius: 8px;
  height: 100%;
  width: 100%;

  .gatsby-image-wrapper {
    height: 60vw;
    max-height: 475px;
    width: 100%;
  }

  & img {
    border-radius: 8px;
    height: 100%;
    margin: 0;
    object-fit: cover;
    padding: 0;
    width: 100%;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  padding-top: 1rem;
`;

const Thumbnail = styled.button`
  background-color: transparent;
  background-image: ${(props) =>
    `url(/${props['data-src']})`};
  background-size: cover;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  height: 65px;
  margin-right: 1rem;
  transition: filter 250ms ease-in;
  width: 65px;

  &[aria-current='true'] {
    filter: brightness(160%) !important;
  }

  &:hover {
    filter: brightness(110%);
  }
`;

const Carousel = ({ data }) => {
  const [state, setState] = React.useState(0);

  const numberOfSlides = size(data);
  const shouldShowThumbnails = numberOfSlides > 1;

  if (!numberOfSlides) return null;

  return (
    <Gallery
      role="region"
      aria-roledescription="carousel"
      aria-label="project gallery"
    >
      {map(data, (item, idx) => (
        <Slide
          aria-roledescription="slide"
          aria-label={item.alt}
          hidden={idx !== state}
          key={item.src}
          role="group"
        >
          <Image
            fluid={{
              src: `/${item.src}`,
            }}
            alt=""
          />
        </Slide>
      ))}
      {shouldShowThumbnails && (
        <ThumbnailContainer
          role="group"
          aria-label="gallery controls"
        >
          {map(data, (item, idx) => (
            <Thumbnail
              aria-current={idx === state}
              aria-disabled={idx === state}
              aria-label={`slide ${idx + 1}`}
              data-src={item.src}
              key={idx}
              onClick={() => setState(idx)}
              type="button"
            />
          ))}
        </ThumbnailContainer>
      )}
    </Gallery>
  );
};

export default Carousel;
