import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Sample state to represent whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const response = async () => {
      await axios.get('http://localhost:3000/server/auth/checkLogin').then((res) => {
        console.log(res.data)
        return res.data
      })
    }
    response()
  })

  return (
    <nav className="bg-blue-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-xl">Your Logo</Link>
        </div>
        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <>
              <Link to="/profile">
                <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full h-10 w-10" />
              </Link>
              <Link to="/" className="text-white hover:text-blue-200">Home</Link>
              <Link to="/dashboard" className="text-white hover:text-blue-200">Dashboard</Link>
              <Link to="/createloan" className="text-white hover:text-blue-200">create loan</Link>
              <Link to="/Lprofile" className="text-white hover:text-blue-200">Lender profile</Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-white hover:text-blue-200"
              >
                Logout
              </button>

            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
              <Link to="/register" className="text-white hover:text-blue-200">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
