import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import OAuthCallback from './components/OAuthCallback';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Sender from './components/Sender';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sender" element={<Sender />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/oauth2/callback" element={<OAuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
