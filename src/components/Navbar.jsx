import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/planet.png';

const Navbar = () => {
  const activeNavLink = {
    textDecoration: 'underline',
    backgroundColor: 'transparent',
    color: 'orange',
    fontSize: '1.2rem',
  };
  return (
    <nav>
      <div className="header">
        <img src={logo} alt="planet" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="nav-link" style={({ isActive }) => (isActive ? activeNavLink : undefined)}>Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" className="nav-link" style={({ isActive }) => (isActive ? activeNavLink : undefined)}>Mission</NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink to="/profile" className="nav-link" style={({ isActive }) => (isActive ? activeNavLink : undefined)}>My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
