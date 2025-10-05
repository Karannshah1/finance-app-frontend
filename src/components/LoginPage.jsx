import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNormalLogin = async () => {
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8091/api/';

    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    }
  };
  const [rememberMe, setRememberMe] = useState(false);

  const handleGoogleLogin = () => {

    // const googleLoginUrl =  "http://localhost:8091/oauth2/authorization/google";
    const googleLoginUrl =  "https://finance-app-backend-kqxu.onrender.com/oauth2/authorization/google";


    const finalUrl = rememberMe 
      ? `${googleLoginUrl}?remember-me=true` 
      : googleLoginUrl;
    window.location.href = finalUrl;
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      

      <button onClick={handleNormalLogin}>Login</button>

      <hr />
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      <div>
        <input 
          type="checkbox" 
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember Me</label>
      </div>


    </div>
  );
}
