import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul className="nav-links">
          {/* Dashboard */}
          <li>
            <Link className="nav-item" to="/">
              Dashboard
            </Link>
          </li>
          {/* Workforce Management */}
          <li>
            <Link className="nav-item" to="/staff">
              Workforce Management
            </Link>
          </li>
          {/* Acquisition Management */}
          <li>
            <Link className="nav-item" to="/procurement">
              Acquisition Management
            </Link>
          </li>
          {/* IT Dashboard */}
          <li>
            <Link className="nav-item" to="/it-dashboard">
              IT Dashboard
            </Link>
          </li>
          {/* Architecture Department */}
          <li>
            <Link className="nav-item" to="/architecture">
              Architecture Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
