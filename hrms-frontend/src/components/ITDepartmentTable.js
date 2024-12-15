import React, { useEffect, useState } from 'react';
import { getITDepartmentData } from '../services/itService';
import './styles.css'; // Import CSS for better styling

const ITDepartmentTable = () => {
  const [itData, setITData] = useState([]); // State to hold IT department data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getITDepartmentData();
        setITData(data);
      } catch (error) {
        console.error('Error fetching IT department data:', error);
        setError('Failed to load IT department data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading IT Department members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="it-department-container">
      {itData.length > 0 ? (
        <table className="it-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {itData.map((item) => (
              <tr key={item._id || item.name}> {/* Fallback to 'name' if '_id' isn't available */}
                <td>{item.name || 'Unknown Name'}</td>
                <td>{item.role || 'Unknown Role'}</td>
                <td>{item.department || 'Unknown Department'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No members found in the IT Department.</p>
      )}
    </div>
  );
};

export default ITDepartmentTable;
