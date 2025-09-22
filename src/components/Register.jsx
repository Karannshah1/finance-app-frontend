import React, { useState } from 'react';
import API from '../api/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await API.post('/auth/register', { email, password });
      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
