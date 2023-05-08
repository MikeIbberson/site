import React from 'react';
import styled from 'styled-components';
import { ThemeContrast } from '../Theme/Theme';

const DarkModeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  border-radius: 500px;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 567px) {
    font-size: 18px;
    line-height: 24px;
  }
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
