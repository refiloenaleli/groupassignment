import React from 'react';
import './styles.css';

const ManageProjects = () => {
  return (
    <div className="section-container">
      <h2>Manage Projects</h2>
      <form className="dashboard-form">
        <label htmlFor="projectName">Project Name:</label>
        <input type="text" id="projectName" placeholder="Enter project name" />
        
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" />
        
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" />
        
        <label htmlFor="status">Status:</label>
        <select id="status">
          <option value="planned">Planned</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ManageProjects;
