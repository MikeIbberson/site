/* eslint-disable react/no-danger,react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Column from '../components/Column';
import Container from '../components/Container';
import ContainerHeader from '../components/ContainerHeader';
import ContainerWrapperDark from '../components/ContainerWrapperDark';
import ContainerWrapperLight from '../components/ContainerWrapperLight';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skill from '../components/Skill';
import SocialImage from '../components/SocialImage';

export { default as Head } from '../components/HeadAssets';

const Index = ({ data }) => {
  const {
    allMarkdownRemark,
    interests = [],
    skills = [],
  } = data;
  const { html } = allMarkdownRemark.nodes[0];
  const [
    heroContent,
    skillsContent,
    projectsContent,
    interestsContent,
  ] = html.split('<hr />');

  return (
    <>
      <Hero>
        <div
          dangerouslySetInnerHTML={{
            __html: heroContent,
          }}
        />
      </Hero>
      <ContainerWrapperDark>
        <Container>
          <ContainerHeader
            id="skills"
            html={skillsContent}
          />
          {skills.nodes.map((skill, idx) => (
            <Column key={`skill-${idx}`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: skill.html,
                }}
              />
              <p>
                {skill.frontmatter.tags
                  .split(',')
                  .map((tag) => (
                    <Skill key={tag} icon={tag} />
                  ))}
              </p>
            </Column>
          ))}
        </Container>
      </ContainerWrapperDark>
      <ContainerWrapperLight>
        <Container>
          <ContainerHeader
            id="projects"
            html={projectsContent}
          />
          <Projects />
        </Container>
      </ContainerWrapperLight>
      <Container>
        <ContainerHeader
          id="interests"
          html={interestsContent}
        />
        {interests.nodes.map(
          ({ frontmatter: { network }, html }) => (
            <Column>
              <article key={network}>
                <SocialImage network={network} />
                <div
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
              </article>
            </Column>
          ),
        )}
      </Container>
    </>
  );
};

export default Index;

export const query = graphql`
  query Home {
    allMarkdownRemark(
      limit: 1
      filter: { fileAbsolutePath: { regex: "/home/" } }
    ) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
        }
        html
      }
    }

    interests: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/interests/" } }
      sort: { frontmatter: { priority: ASC } }
    ) {
      nodes {
        frontmatter {
          network
          priority
        }
        html
      }
    }

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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

    skills: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/skills/" } }
      sort: { frontmatter: { priority: ASC } }
    ) {
      nodes {
        frontmatter {
          tags
        }
        html
      }
    }
  }
`;
