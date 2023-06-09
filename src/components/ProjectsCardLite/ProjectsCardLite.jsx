/* eslint-disable react/no-danger,react/prop-types */
import styled from 'styled-components';
import { getThemePropMuted } from '../Theme/utils';

export default styled.aside`
  box-sizing: border-box;
  width: 360px;

  .project-card {
    background-color: ${getThemePropMuted()};
    margin-left: 0px;
    width: 320px;
  }

  .project-card p {
    display: none;
  }

  [data-slug='${(props) => props.slug}'] {
    text-decoration: underline;
  }

  @media (max-width: 1187px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0 2rem;
    width: 100%;

    .project-card {
      width: 44%;
    }
  }

  @media (max-width: 567px) {
    .project-card {
      width: 100%;
    }
  }
`;
