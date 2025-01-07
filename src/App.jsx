import React from 'react';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <h1>Welcome to the Auth App</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <nav>  
        <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
};


export default App;
