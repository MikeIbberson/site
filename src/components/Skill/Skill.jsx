import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <span
      aria-label={icon}
      className={`devicon-${icon}-${getVersion()}`}
      role="img"
      style={{ fontSize: '1.2rem' }}
      title={icon}
    />
  );
};

Skill.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Skill;
