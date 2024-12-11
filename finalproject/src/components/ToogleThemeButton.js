import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 60px;
  height: 34px;
  background-color: ${({ theme }) => (theme === 'light' ? '#ccc' : '#444')};
  border-radius: 34px;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) => (theme === 'light' ? 'flex-start' : 'flex-end')};
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.3s, justify-content 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const SwitchKnob = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => (theme === 'light' ? '#fbc02d' : '#ffeb3b')};
  transition: color 0.3s;
`;

const SunIcon = () => <Icon theme="light">☀️</Icon>;
const MoonIcon = () => <Icon theme="dark">🌙</Icon>;

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <SwitchContainer onClick={toggleTheme} theme={theme}>
      <SwitchKnob>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </SwitchKnob>
    </SwitchContainer>
  );
};

export default ToggleThemeButton;
