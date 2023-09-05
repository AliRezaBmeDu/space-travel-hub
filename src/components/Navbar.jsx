import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/planet.png';

const Navbar = () => (
  <nav>
    <img src={logo} alt="planet" />
    <ul>
      <li>
        <Link to="/rockets">Rockets</Link>
      </li>
      <li>
        <Link to="/missions">Mission</Link>
      </li>
      <li>
        <Link to="/">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
