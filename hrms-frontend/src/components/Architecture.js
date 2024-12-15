import React from 'react';
import { Link } from 'react-router-dom';
import './arch.css';

const Architecture = () => {
  return (
    <div className="architecture-container">
      {/* Header Section */}
      <header className="architecture-header">
        <h1>Architecture Department Dashboard</h1>
        <p>
          Welcome to the Architecture Management Console—your centralized hub for overseeing architecture projects, managing teams, and accessing all critical information with ease and efficiency.
        </p>
      </header>

      {/* Navigation Links */}
      <nav className="architecture-nav">
        <Link className="nav-button" to="/architecture/manage-projects">
          Manage Projects
        </Link>
        <Link className="nav-button" to="/architecture/manage-staff">
          Manage Staff
        </Link>
        <Link className="nav-button" to="/architecture/reports">
          View Reports
        </Link>
      </nav>

      {/* Dashboard Content Section */}
      <section className="architecture-content">
        <div className="stat-card">
          <h3>Current Projects</h3>
          <p className="stat-value">10</p>
        </div>
        <div className="stat-card">
          <h3>Staff Members</h3>
          <p className="stat-value">25</p>
        </div>
        <div className="stat-card">
          <h3>Reports Generated</h3>
          <p className="stat-value">12</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="architecture-footer">
        <p>
          © 2023 Architecture Management System | Developed by ArtLife Group
        </p>
      </footer>
    </div>
  );
};

export default Architecture;
