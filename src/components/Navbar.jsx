import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/planet.png';

const Navbar = () => (
  <nav>
    <div className="header">
    <img src={logo} alt="planet" />
    <h1>Space Traverers' Hub</h1>
    </div>
    <ul>
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/missions">Mission</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
