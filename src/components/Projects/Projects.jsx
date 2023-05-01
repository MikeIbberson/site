import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectsCard from '../ProjectsCard';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
        }
        sort: { frontmatter: { priority: ASC } }
      ) {
        nodes {
          frontmatter {
            brand
            description
            slug
            title
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map(
    (project, idx) => (
      <ProjectsCard
        {...project}
        {...project.frontmatter}
        key={`project-${idx}`}
        index={idx}
      />
    ),
  );
};

Projects.defaultProps = {
  slug: undefined,
};

PropTypes.propTypes = {
  slug: PropTypes.string,
};

export default Projects;
