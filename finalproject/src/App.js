import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ReduxExample from './components/ReduxExample';
import WeatherApp from './components/WeatherApp';
import SearchWeather from './components/SearchWeather';
import Team from './pages/Team';
import Mission from './pages/Mission';
import CounterComponent from './components/CounterComponent';
import { WeatherProvider } from './context/WeatherContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ToggleThemeButton from './components/ToogleThemeButton';
import './App.css';

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <div className="dropdown">
            <Link to="/about">About</Link>
            <div className="dropdown-content">
              <Link to="/about/team">Team</Link>
              <Link to="/about/mission">Mission</Link>
            </div>
          </div>
        </li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/redux-example">Redux Example</Link></li>
        <li><Link to="/weather-app">Weather App</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
      <ToggleThemeButton />
    </nav>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ThemeProvider>
      <WeatherProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}>
                <Route path="team" element={<Team />} />
                <Route path="mission" element={<Mission />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/redux-example" element={<ReduxExample />} />
              <Route path="/weather-app" element={
                <>
                  <SearchWeather setSearchTerm={setSearchTerm} />
                  <WeatherApp searchTerm={searchTerm} />
                </>
              } />
              <Route path="/counter" element={<CounterComponent />} />
            </Routes>
          </div>
        </Router>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
