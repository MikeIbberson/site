import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { capitalize } from 'lodash';

const ListItem = styled.li`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  & small {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;

const Skill = ({ icon }) => {
  const includes = (xs) => xs.includes(icon);

  const getVersion = () => {
    if (
      includes(['codepen', 'express', 'github', 'markdown'])
    )
      return 'original';
    if (includes(['npm'])) return 'original-wordmark';
    if (includes(['circleci', 'handlebars']))
      return 'plain';
    return 'plain colored';
  };

  const renderFriendlyText = () => {
    if (icon === 'amazonwebservices') return 'aws';
    if (icon === 'materialui') return 'mui';
    return icon;
  };

  return (
    <ListItem className={`devicon-${icon}-${getVersion()}`}>
      <small>{capitalize(renderFriendlyText())}</small>
    </ListItem>
  );
};

Skill.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Skill;
