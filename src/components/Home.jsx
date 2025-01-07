import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    localStorage.removeItem("accessToken"); // Example of removing a token
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-600 mb-8">You are now logged in!</p>
      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
