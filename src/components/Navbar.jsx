import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">My Profile</Link>
      </li>
      <li>
        <Link to="/rockets">Rockets</Link>
      </li>
      <li>
        <Link to="/mission">Mission</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
