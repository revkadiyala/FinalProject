import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <h1>About This App</h1>
      <p>This app is used to find the climatic condiitions of the weather for the different locations 
      </p>
      <nav>
        <ul>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
