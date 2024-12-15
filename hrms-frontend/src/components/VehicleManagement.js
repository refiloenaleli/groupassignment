import React, { useState } from 'react';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: 'IT Support Van', status: 'Available' },
    { id: 2, name: 'Delivery Truck', status: 'In Maintenance' },
    { id: 3, name: 'Company Car', status: 'Assigned' },
  ]);

  const toggleStatus = (id) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === id
          ? {
              ...vehicle,
              status: vehicle.status === 'Available' ? 'In Use' : 'Available',
            }
          : vehicle
      )
    );
  };

  return (
    <div className="vehicle-management">
      <h2>Vehicle Management</h2>
      <p>Manage IT department vehicles here.</p>

      <table>
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
                <button onClick={() => toggleStatus(vehicle.id)}>
                  {vehicle.status === 'Available' ? 'Mark In Use' : 'Mark Available'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          .vehicle-management {
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }

          th {
            background-color: #f4f4f4;
          }

          button {
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
          }

          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default VehicleManagement;
