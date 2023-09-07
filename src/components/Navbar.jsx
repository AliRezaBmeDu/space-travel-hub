import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/planet.png';

const Navbar = () => (
  <nav>
    <div className="header">
      <img src={logo} alt="planet" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul>
      <li>
        <Link to="/" className="nav-link">Rockets</Link>
      </li>
      <li>
        <Link to="/missions" className="nav-link">Mission</Link>
      </li>
      <li>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
