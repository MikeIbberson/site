import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Article = styled.article.attrs({
  className: 'column',
})`
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  margin: 8px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  width: 22%;

  a {
    box-sizing: border-box;
    display: block;
    height: 100%;
    padding: 2rem;
    width: 100%;
  }

  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 992px) {
    max-width: 42%;
    width: 42%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;

    a {
      padding: 1.5rem;
    }
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
