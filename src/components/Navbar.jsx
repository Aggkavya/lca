import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/logo1.png'; // Ensure you have a logo image in the specified path
const Navbar = () => {
return (
<nav className="bg-white text-black p-4 shadow-md">
<div className="container mx-auto flex justify-between items-center">
{/* Left section: Logo */}
<div className="flex items-center">
  <Link to="/">
    <img 
      src={logo} 
      alt="Logo" 
      className="h-12 w-auto" 
    />
  </Link>
</div>


{/* Middle section: Navigation links */}
<ul className="flex space-x-8 text-lg">
<li>
<Link to="/" className="hover:text-gray-400 text-black">
HOME
</Link>
</li>
<li>
<Link to="/dashboard" className="hover:text-gray-400">
DASHBOARD
</Link>
</li>
<li>
<Link to="/documentation" className="hover:text-gray-400 ">
DOCUMENTATION
</Link>
</li>
<li>
<Link to="/data" className="hover:text-gray-400">
DATA
</Link>
</li>
<li>
<Link to="/contact-us" className="hover:text-gray-400">
CONTACT US
</Link>
</li>
</ul>

{/* Right section: Login/Sign Up buttons */}
<ul className="flex space-x-4 items-center">
<li>
<Link to="/login" className="hover:text-gray-400">
Login
</Link>
</li>
<li>
{/* The "Sign Up" button with a dark background and rounded corners */}
<Link to="/signup" className="bg-black text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-gray-700">
Sign Up
</Link>
</li>
</ul>
</div>
</nav>
);
};

export default Navbar;