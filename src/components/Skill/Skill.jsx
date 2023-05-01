import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  display: list-item;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  & small {
    margin-left: 0.25rem;
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
      <small>{renderFriendlyText()}</small>
    </ListItem>
  );
};

Skill.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Skill;
