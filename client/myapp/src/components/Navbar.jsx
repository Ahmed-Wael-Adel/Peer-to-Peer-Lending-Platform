import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Sample state to represent whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="bg-blue-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-xl">Upstart</Link>
        </div>
        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <>
              <Link to="/LenderProfile">
                <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full h-10 w-10" />
              </Link>
              <Link to="/" className="text-white hover:text-blue-200">Home</Link>
              <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
              <Link to="/signup" className="text-white hover:text-blue-200">Register</Link>
              
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
              <Link to="/signup" className="text-white hover:text-blue-200">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
