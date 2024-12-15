import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// GET IT Department Data
export const getITDepartmentData = async () => {
  try {
    const response = await axios.get(`${API_URL}/it-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IT department data:", error);
    throw error;
  }
};
