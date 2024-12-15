import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0 });
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch statistics and logs data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsResponse, logsResponse] = await Promise.all([
        axios.get('http://localhost:4000/users/stats'),
        axios.get('http://localhost:4000/users/logs'),
      ]);

      setStats(statsResponse.data);
      setLogs(logsResponse.data);
    } catch (error) {
      console.error('Error fetching data', error);
      alert('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="statistics-section">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p>{stats.totalUsers}</p>
            </div>
            <div className="stat-card">
              <h3>Active Users</h3>
              <p>{stats.activeUsers}</p>
            </div>
          </div>
          <div className="logs-section">
            <h3>Recent Activity Logs</h3>
            {logs.length > 0 ? (
              <table className="logs-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>User</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log) => (
                    <tr key={log.id}>
                      <td>{new Date(log.timestamp).toLocaleString()}</td>
                      <td>{log.activity}</td>
                      <td>{log.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No activity logs available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
