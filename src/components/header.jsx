import React from 'react';
import Navbar from './Navbar'; // Ensure case matches exactly

const Header = () => {
  return (
    <div className="relative min-h-screen mb-4 bg-cover bg-center flex flex-col items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
      
      {/* Navbar (Fixed at the top) */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Header Content */}
      <div className="flex flex-col justify-center items-center text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white flex-grow">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] font-semibold pt-20 max-w-3xl">
          Explore Homes That Fit Your Dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#" className="border border-white px-8 py-3 rounded">Projects</a>
          <a href="#" className="bg-blue-500 px-8 py-3 rounded">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
