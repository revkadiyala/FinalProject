import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const ToggleSwitch = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => (theme === 'light' ? '#ccc' : '#555')};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) => (theme === 'light' ? 'flex-start' : 'flex-end')};
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s, justify-content 0.3s;
`;

const ToggleKnob = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
`;

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ToggleSwitch onClick={toggleTheme} theme={theme}>
      <ToggleKnob />
    </ToggleSwitch>
  );
};

export default ToggleThemeButton;
