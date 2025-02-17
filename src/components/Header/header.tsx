import type React from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { Menu, X } from "lucide-react"
import { useState } from "react"


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-black relative">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Center on mobile, left on desktop */}
          <div className="md:order-2 text-center">
            <Link to="/" className="text-2xl md:text-3xl font-bold cursor-pointer">
              TSHOPP
            </Link>
          </div>

          {/* Search - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex md:order-1 md:flex-1">
            <form action="search" className="flex items-center max-w-xs">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full px-4 py-2 rounded-l-lg border-2 focus:outline-none"
              />
              <button
                type="submit"
                className="text-black px-4 py-2 rounded-r-lg border-2 border-l-0 transition duration-300 hover:bg-gray-100"
              >
                <FaSearch size={20} />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden order-1"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation - Hidden on mobile, shown on desktop */}
          <nav className="hidden md:flex md:order-3 md:flex-1 md:justify-end">
            <ul className="flex gap-10 uppercase font-medium">
              <li>
                <Link to="/" className="hover:text-blue-600 transition duration-300">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-600 transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition duration-300">
                  Liên hệ
                </Link>
              </li>
              <li>
                  Tiếng Anh
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu - Slide down when open */}
        <div className={`
          md:hidden 
          absolute 
          left-0 
          right-0 
          bg-white 
          shadow-lg
          transition-all 
          duration-300 
          ${isMenuOpen ? 'top-full opacity-100' : '-top-96 opacity-0'}
        `}>
          {/* Mobile Search */}
          <div className="p-4 border-b">
            <form action="search" className="flex items-center">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full px-4 py-2 rounded-l-lg border-2 focus:outline-none"
              />
              <button
                type="submit"
                className="text-black px-4 py-2 rounded-r-lg border-2 border-l-0 transition duration-300 hover:bg-gray-100"
              >
                <FaSearch size={20} />
              </button>
            </form>
          </div>

          {/* Mobile Navigation */}
          <nav className="p-4">
            <ul className="flex flex-col gap-4 uppercase font-medium">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link 
                  to="/product" 
                  className="block py-2 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About 
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacts" 
                  className="block py-2 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  English
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header