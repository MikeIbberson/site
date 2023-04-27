/* eslint-disable react/no-danger,react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { map } from 'lodash';
import Article from '../components/Article';
import Carousel from '../components/Carousel';
import Container from '../components/Container';
import Facts from '../components/Facts';
import Projects from '../components/Projects';
import ProjectsCardLite from '../components/ProjectsCardLite';

export { default as Head } from '../components/HeadAssets';

const Project = ({
  data: {
    markdownRemark: {
      frontmatter: {
        description,
        facts = [],
        gallery = [],
        title,
      },
      html,
    },
  },
  params: { frontmatter__slug: slug },
}) => (
  <Container>
    <Article>
      <main>
        <nav aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>Projects</li>
          </ul>
        </nav>
        <h1 style={{ marginTop: '1rem' }}>{title}</h1>
        <p className="leadin">{description}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
        >
          <div
            className="html"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div>
            <Facts data={facts} />
            <Carousel
              data={map(gallery, (item) => {
                const [src, alt] = item.split(',');
                return {
                  alt,
                  src,
                };
              })}
            />
          </div>
        </div>
      </main>
      <ProjectsCardLite slug={slug}>
        <Projects />
      </ProjectsCardLite>
    </Article>
  </Container>
);

export default Project;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
        gallery
        facts
        slug
        title
      }
      html
    }
  }
`;
