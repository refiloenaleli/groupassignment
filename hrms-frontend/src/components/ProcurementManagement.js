import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProcurementManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    VIN: '',
    model: '',
    mileage: '',
    status: '',
    driver: ''
  });

  const fetchVehicles = async () => {
    const res = await axios.get('http://localhost:5000/vehicles');
    setVehicles(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/vehicles', formData);
    fetchVehicles();
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div className="procurement-management">
      <h2>Procurement Management</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Input fields for vehicle data */}
        <input name="VIN" placeholder="VIN" onChange={handleChange} required />
        <input name="model" placeholder="Model" onChange={handleChange} required />
        <input name="mileage" placeholder="Mileage" onChange={handleChange} required />
        <input name="status" placeholder="Status" onChange={handleChange} required />
        <input name="driver" placeholder="Driver" onChange={handleChange} required />
        <button type="submit">Add Vehicle</button>
      </form>

      <ul className="vehicle-list">
        {vehicles.map((v) => (
          <li key={v._id}>{v.model} - {v.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProcurementManagement;
