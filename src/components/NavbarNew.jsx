import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavbarNew = () => {
  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section: "LCA" Logo and Dashboard link */}
        <div className="flex items-center space-x-2">
          {/* Black background for the "LCA" logo */}
          <div className="bg-black p-2 rounded-lg flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-wide">
              LCA
            </Link>
          </div>
          {/* Dashboard link */}
          <Link to="/dashboard" className="text-black ml-4 hover:text-gray-400">
            Dashboard
          </Link>
        </div>

        {/* Right section: Navigation links and Logout button */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link to="/about" className="hover:text-gray-400">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/documentation" className="hover:text-gray-400">
              DOCUMENTATION
            </Link>
          </li>
          <li>
            <Link to="/data" className="hover:text-gray-400">
              DATA
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              CONTACT US
            </Link>
          </li>
          <li>
            {/* The Logout button */}
            <Link to="/logout" className="bg-black text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-gray-700">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;