import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#E0E0E0] py-8 shadow-lg border-t border-[#4A90E2]">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">My E-commerce</p>
        <p className="mt-2">© 2023 My E-commerce. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link to="/about" className="text-[#B0B0B0] hover:text-[#4A90E2]">
            About Us
          </Link>
          <Link to="/contact" className="text-[#B0B0B0] hover:text-[#4A90E2]">
            Contact
          </Link>
          <Link to="/privacy" className="text-[#B0B0B0] hover:text-[#4A90E2]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
