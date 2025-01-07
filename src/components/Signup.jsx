// src/pages/Signup.jsx
import React, { useState } from 'react';
import axios from '../api/axios'; // Import the axios instance
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/signup', formData); // Make POST request using the axios instance
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Network Error: Could not reach server');
    }
  };
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',  // Ensure the port matches your backend
  });
  

   return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Sign Up
          </Button>
        </form>
        {message && <p className="text-sm text-center text-red-500">{message}</p>}
        <p className="text-sm text-center text-gray-500">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
