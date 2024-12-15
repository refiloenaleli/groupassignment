import React from 'react';
import './styles.css';

const ManageStaff = () => {
  return (
    <div className="section-container">
      <h2>Manage Staff</h2>
      <form className="dashboard-form">
        <label htmlFor="staffName">Staff Name:</label>
        <input type="text" id="staffName" placeholder="Enter staff name" />
        
        <label htmlFor="role">Role:</label>
        <input type="text" id="role" placeholder="Enter role" />
        
        <label htmlFor="department">Department:</label>
        <input type="text" id="department" placeholder="Enter department" />
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ManageStaff;
