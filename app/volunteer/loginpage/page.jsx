'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.css'

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    cnic: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, cnic, email, password } = formData;

    if (!name || !cnic || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    router.push('/volunteer/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-subtitle">Welcome to</h2>
        <h1 className="login-title">Volunteer Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            placeholder="CNIC"
            className="login-input"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="login-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="login-input"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="login-input"
          />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
