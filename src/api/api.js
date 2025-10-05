import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8091/api';
const API = axios.create({

  baseURL: API_URL,
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
