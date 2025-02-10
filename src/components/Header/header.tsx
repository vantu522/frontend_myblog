// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng react-router-dom để điều hướng giữa các trang

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold ">
            Dhop Sport
          </Link>
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Giỏ hàng */}
        <div className="flex items-center">
         
        </div>
      </div>
    </header>
  );
};

export default Header;
