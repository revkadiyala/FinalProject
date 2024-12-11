import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: ${({ theme }) => (theme === 'light' ? '#007bff' : '#343a40')};
  color: white;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#0056b3' : '#1d1d1d')};
    transform: scale(1.05);
  }
`;

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return <ToggleButton onClick={toggleTheme} theme={theme}>Toggle Theme</ToggleButton>;
};

export default ToggleThemeButton;
