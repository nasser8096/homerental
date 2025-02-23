import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Branding */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={assets.logo}
              alt="YourBrand Logo" 
              className="h-16 mb-4"
            />
            <h1 className="text-xl font-semibold">YourBrand</h1>
            <p className="text-gray-400 text-sm mt-2 text-center md:text-left">
              Building the future together with innovative solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-center">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-pink-500">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-700">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
