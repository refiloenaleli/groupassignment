import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import StaffManagement from './StaffManagement';
import VehicleManagement from './VehicleManagement';
import Procurement from './Procurement';
import ITDashboardContent from './ITDashboardContent'; // This is your new dashboard component
import NotFound from './NotFound';
import './styles.css';

const ITDashboard = () => {
  return (
    <div className="it-dashboard">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          {/* Existing Links */}
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/staff-management">
              Staff Management
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/vehicle-management">
              Vehicle Management
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/procurement">
              Procurement
            </NavLink>
          </li>
          {/* New Navigation Item */}
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/it-dashboard">
              IT Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff-management" element={<StaffManagement />} />
        <Route path="/vehicle-management" element={<VehicleManagement />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/it-dashboard" element={<ITDashboardContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ITDashboard;
