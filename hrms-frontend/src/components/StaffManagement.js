import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch staff data from the backend
  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get('http://localhost:4000/staff');
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update staff
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:4000/staff/${editingId}`, formData);
        alert('Staff updated successfully');
      } else {
        await axios.post('http://localhost:4000/staff', formData);
        alert('Staff added successfully');
      }
      resetForm();
      fetchStaff();
    } catch (error) {
      console.error('Error saving staff:', error);
    }
  };

  // Edit staff
  const handleEdit = (id) => {
    const selectedStaff = staff.find((s) => s._id === id);
    setFormData({
      name: selectedStaff.name,
      position: selectedStaff.position,
      department: selectedStaff.department,
    });
    setEditingId(id);
    setIsEditing(true);
  };

  // Delete staff
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      try {
        await axios.delete(`http://localhost:4000/staff/${id}`);
        alert('Staff deleted successfully');
        fetchStaff();
      } catch (error) {
        console.error('Error deleting staff:', error);
      }
    }
  };

  // Reset the form
  const resetForm = () => {
    setFormData({ name: '', position: '', department: '' });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="staff-management">
      <h2>Staff Management</h2>

      <form onSubmit={handleSubmit} className="staff-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn-primary">
          {isEditing ? 'Update Staff' : 'Add Staff'}
        </button>
        {isEditing && (
          <button type="button" onClick={resetForm} className="btn-secondary">
            Cancel
          </button>
        )}
      </form>

      <h3>Staff List</h3>
      {staff.length > 0 ? (
        <ul className="staff-list">
          {staff.map((s) => (
            <li key={s._id} className="staff-item">
              <span>
                <strong>{s.name}</strong> - {s.position} - {s.department}
              </span>
              <div className="staff-actions">
                <button
                  onClick={() => handleEdit(s._id)}
                  className="btn-edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s._id)}
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No staff members available.</p>
      )}
    </div>
  );
};

export default StaffManagement;
