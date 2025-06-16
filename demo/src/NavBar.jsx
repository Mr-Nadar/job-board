import React from "react";

const NavBar = () => (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
       
        <div className="flex-shrink-0 flex items-center">
          <span className="text-2xl font-bold text-blue-600">JobBoard</span>
        </div>
       
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">Jobs</a>
          <a href="/jobs" className="text-gray-700 hover:text-blue-600 font-medium"> Add Jobs</a>     
          <a href="/companies" className="text-gray-700 hover:text-blue-600 font-medium">Companies</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
        </div>

       
      </div>
    </div>
  </nav>
);

export default NavBar;