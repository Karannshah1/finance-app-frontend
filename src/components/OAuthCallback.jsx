// src/pages/OAuthCallback.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const email = params.get("email");

    if (token && email) {
      // Save the token and user email to localStorage
      localStorage.setItem("accessToken", token);
      localStorage.setItem("email", email);

      // Redirect to the dashboard
      navigate("/dashboard");
    } else {
      navigate("/"); // fallback to login if token is missing
    }
  }, [navigate]);

  return <p>Logging in, please wait...</p>;
};

export default OAuthCallback;
