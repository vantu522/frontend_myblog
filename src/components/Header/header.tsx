// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng react-router-dom để điều hướng giữa các trang
import {FaUser, FaSearch, FaPhoneSlash} from 'react-icons/fa'
import logo from '../../assets/images/sop.png'
import { PhoneCall , ShoppingBag} from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header >
      <div className ="bg-[#00094C] text-white  "> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-8">
            {/* cot 1*/}
            <div className=" ml-16 text-center ">
              <a href="/" className='text-center ' >
                <img src={logo} alt="" className='w-40 auto'  />
              </a>
            </div>

            {/* cot 2 */}
            <div className="">
              <div>
                <form action="search" className='flex items-center   overflow-hidden rounded-lg'>
                  <input type="text" placeholder='nhập sản phẩm tìm kiếm' className='p-4 flex-1 outline-none text-black ' />
                  <button type='submit' className=' p-4  bg-pink-300 flex items-center justify-center text-white  '>
                    <FaSearch size={20}  ></FaSearch>
                  </button>
                </form>
              </div>
            </div>

            {/* cot 3 */}
            <div className="p-4 flex gap-12 font-test ml-8  ">
              <div className='flex gap-2 items-center uppercase'>
                <PhoneCall size={30}></PhoneCall>
                <a>
                  <p>Hotline</p>
                  <p>012345678</p>
                </a>
              </div>
              <div className='flex gap-2 items-center capitalize'>
                <a href="">
                  <ShoppingBag></ShoppingBag>
                </a>
                <a href="">
                  <p>Giỏ hàng</p>
                  <p>0 sản phẩm</p>
                </a>

              </div>
            </div>
          </div>
      </div>  
      {/*nav content*/}
      <nav className='bg-[#ffb703] h-16 text-white '>
        <div className=' py-6'>
          <ul className='flex items-center gap-5 justify-center capitalize font-bold font-custom'>
            <li>
              <a href="">trang chủ</a>
            </li>
            <li>
              <a href="">danh mục</a>
            </li><li>
              <a href="">tin tức</a>
            </li><li>
              <a href="">liên hệ</a>
            </li>
          
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
