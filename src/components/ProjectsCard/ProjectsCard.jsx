import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getThemePropShade } from '../Theme/utils';
import { getThemePropContrast } from '../Theme/utils';

const Article = styled.article.attrs({
  className: 'column',
})`
  background-color: ${getThemePropContrast()};
  border-radius: 8px;
  box-sizing: border-box;
  margin: 8px;
  max-width: 100%;
  min-width: 320px;
  position: relative;
  overflow: hidden;
  width: 22%;

  h3 {
    font-size: 1.44rem;
  }

  a {
    border: 4px solid transparent;
    box-sizing: border-box;
    display: block;
    height: 100%;
    padding: 2rem;
    transition: border-color 350ms;
    width: 100%;

    &:hover,
    &:focus {
      border-color: ${getThemePropShade()};
    }
  }

  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 767px) {
    min-width: 220px;

    a {
      padding: 1.5rem;
    }
  }

  @media (max-width: 567px) {
    max-width: 100%;
    min-width: 92%;
    width: 92%;
  }
`;

const ProjectsCard = ({
  brand,
  description,
  slug,
  title,
}) => (
  <Article className="project-card" data-slug={slug}>
    <Link title="View project details" to={`/${slug}`}>
      <small>{brand}</small>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  </Article>
);

export default ProjectsCard;
