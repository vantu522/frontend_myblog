// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng react-router-dom để điều hướng giữa các trang
import {FaUser, FaSearch} from 'react-icons/fa'

const Header: React.FC = () => {
  return (
    <header >
      <div className ="bg-blue-500 h-20"> 
        <div className='container'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" p-4">Cột 1</div>
            <div className=" p-4">
              <div>
                <form action="search" className='flex items-center border border-gray-300 overflow-hidden rounded-lg'>
                  <input type="text" placeholder='nhập sản phẩm tìm kiếm' className='p-2 flex-1 outline-none' />
                  <button type='submit' className='p-2 bg-gray-300 text-white '>
                    <FaSearch></FaSearch>
                  </button>
                </form>
              </div>
            </div>
            <div className=" p-4">Cột 3</div>
          </div>
        </div>
      </div>   
      <nav></nav>
      
    </header>
  );
};

export default Header;
