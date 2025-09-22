import axios from 'axios';

const API_URL = 'http://localhost:8091/api/auth'; // adjust as per backend

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data; // expected to return { token: 'JWT' }
};
