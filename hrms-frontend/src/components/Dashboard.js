import React, { useState, useEffect } from 'react';
import './styles.css'; // Using the existing global stylesheet

const Dashboard = () => {
  const [staffCount, setStaffCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [architectureProjects, setArchitectureProjects] = useState(0);

  // Simulate fetching data from a backend
  useEffect(() => {
    
    setStaffCount(15); 
    setOrdersCount(8); 
    setArchitectureProjects(5); 
  }, []);

  const handleNavigation = (path) => {
    window.location.href = path; 
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header>
        <h1>WMS Dashboard</h1>
        <nav>
          <ul>
            <li>
              <a href="/staff">Workforce Management</a>
            </li>
            <li>
              <a href="/procurement">Acquisition Management</a>
            </li>
            <li>
              <a href="/reports">Reports</a>
            </li>
            <li>
              <a href="/it-dashboard">IT Department</a>
            </li>
            <li>
              <a href="/architecture">Architecture Department</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dashboard Stats Section */}
      <div className="dashboard-stats">
        {/* Workforce Management */}
        <div className="stat">
          <h3>Total Workforce</h3>
          <p className="stat-value">{staffCount}</p>
          <button
            className="stat-button"
            onClick={() => handleNavigation('/staff-management')}
          >
            Manage Workforce
          </button>
        </div>

        {/* Acquisition Management */}
        <div className="stat">
          <h3>Total Acquisition Orders</h3>
          <p className="stat-value">{ordersCount}</p>
          <button
            className="stat-button"
            onClick={() => handleNavigation('/procurement')}
          >
            Manage Acquisition
          </button>
        </div>

        {/* IT Department */}
        <div className="stat">
          <h3>IT Department</h3>
          <p className="stat-value">{ordersCount}</p>
          <button
            className="stat-button"
            onClick={() => handleNavigation('/it-dashboard')}
          >
            Manage IT Department
          </button>
        </div>

        {/* Architecture Department */}
        <div className="stat">
          <h3>Architecture Department</h3>
          <p className="stat-value">{architectureProjects}</p>
          <button
            className="stat-button"
            onClick={() => handleNavigation('/architecture')}
          >
            Manage Architecture
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <p>
          © 2023 WMS. Developed by ArtLife Group |{' '}
          <a href="/contact">Contact Us</a>
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
