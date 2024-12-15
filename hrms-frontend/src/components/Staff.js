import React, { useState } from 'react';

const Staff = () => {
  const [staffList, setStaffList] = useState([
    { id: 1, name: 'Makhala Matsoso', position: 'Manager', department: 'HR' },
    { id: 2, name: 'Rethabile Khosi', position: 'Developer', department: 'IT' },
  ]);

  const [newStaff, setNewStaff] = useState({
    name: '',
    position: '',
    department: '',
  });

  const [editMode, setEditMode] = useState(false); // Flag for edit mode
  const [editStaffId, setEditStaffId] = useState(null); // ID of staff being edited

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      // Update existing staff
      setStaffList(
        staffList.map((staff) =>
          staff.id === editStaffId ? { ...staff, ...newStaff } : staff
        )
      );
      setEditMode(false);
      setEditStaffId(null);
    } else {
      // Add new staff
      setStaffList([...staffList, { ...newStaff, id: staffList.length + 1 }]);
    }

    setNewStaff({ name: '', position: '', department: '' });
  };

  const handleEdit = (staff) => {
    setEditMode(true);
    setEditStaffId(staff.id);
    setNewStaff({ name: staff.name, position: staff.position, department: staff.department });
  };

  const handleDelete = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <div className="staff-container">
      <h2>Workforce Management</h2>
      <h3>{editMode ? 'Edit Staff' : 'Add Workforce'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStaff.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newStaff.position}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newStaff.department}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editMode ? 'Update Staff' : 'Add Staff'}</button>
      </form>

      <h3>Workforce List</h3>
      {staffList.length > 0 ? (
        <ul>
          {staffList.map((staff) => (
            <li key={staff.id}>
              <span>
                {staff.name} - {staff.position} - {staff.department}
              </span>
              <button onClick={() => handleEdit(staff)}>Edit</button>
              <button onClick={() => handleDelete(staff.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Workforce members available.</p>
      )}
    </div>
  );
};

export default Staff;
