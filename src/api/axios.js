// src/api/axios.js

import axios from 'axios';
// import axios from './axios'; // Your axios instance
// You can set up a base URL here for convenience
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Backend URL
});
const fetchAdminData = async () => {
  try {
    const response = await axios.get('/auth/admin', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data?.error || 'Request failed');
  }
}

export default axiosInstance;
