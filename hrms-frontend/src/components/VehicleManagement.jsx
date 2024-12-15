import React, { useState } from 'react';
import './styles.css'; // Import styles for better design

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: 'IT Support Van', status: 'Available' },
    { id: 2, name: 'Delivery Truck', status: 'In Maintenance' },
    { id: 3, name: 'Company Car', status: 'Assigned' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Simulate asynchronous action
  const simulateAsyncAction = async (vehicle) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...vehicle, status: vehicle.status === 'Available' ? 'In Use' : 'Available' });
      }, 500); // Simulated delay
    });
  };

  const handleToggleStatus = async (vehicle) => {
    const updatedVehicle = await simulateAsyncAction(vehicle);
    setVehicles((prevVehicles) =>
      prevVehicles.map((v) => (v.id === updatedVehicle.id ? updatedVehicle : v))
    );
    setShowModal(false);
    setSelectedVehicle(null);
  };

  const openModal = (vehicle) => {
    setShowModal(true);
    setSelectedVehicle(vehicle);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="vehicle-management">
      <h2>Vehicle Management</h2>
      <p>Manage IT department vehicles here.</p>

      {/* Table for displaying vehicles */}
      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td>{vehicle.name}</td>
                <td>{vehicle.status}</td>
                <td>
                  <button className="action-btn" onClick={() => openModal(vehicle)}>
                    {vehicle.status === 'Available' ? 'Mark In Use' : 'Mark Available'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showModal && selectedVehicle && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Status Change</h3>
            <p>
              Are you sure you want to change the status of "{selectedVehicle.name}" to{' '}
              {selectedVehicle.status === 'Available' ? 'In Use' : 'Available'}?
            </p>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={() => handleToggleStatus(selectedVehicle)}>
                Confirm
              </button>
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleManagement;
