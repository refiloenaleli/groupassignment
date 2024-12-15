import axios from 'axios';

// Base URL for your WMS server's API
const BASE_URL = 'http://localhost:4000';

export const getStaffData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/staff`);
    return response.data;
  } catch (error) {
    console.error('Error fetching staff data:', error);
    return [];
  }
};

export const getVehicleData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/vehicles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    return [];
  }
};
