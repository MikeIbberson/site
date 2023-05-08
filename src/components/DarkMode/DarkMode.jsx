import React from 'react';
import styled from 'styled-components';
import { ThemeContrast } from '../Theme/Theme';

const DarkModeButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 500px;
`;

const DarkMode = () => {
  const { toggle, type } = React.useContext(ThemeContrast);

  return (
    <DarkModeButton
      aria-label="change contrast mode"
      onClick={toggle}
      title="change contrast"
      type="button"
    >
      {type === 'light' ? '🌙' : '☀️'}
    </DarkModeButton>
  );
};

export default DarkMode;
