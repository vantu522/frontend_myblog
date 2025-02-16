import type React from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

const Header: React.FC = () => {
  return (
    <header className=" text-black">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          {/* Search on the left */}
          <div className="flex-1 ">
            <form action="search" className="flex items-center max-w-xs">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full px-4 py-2 rounded-l-lg border-2  focus:outline-none  "
              />
              <button
                type="submit"
                className=" text-black px-4 py-2 rounded-r-lg  transition duration-300"
              >
                <FaSearch size={20} />
              </button>
            </form>
          </div>

          <div><Link to="/" className="text-3xl cursor-pointer" >TSHOPP</Link></div>

          {/* Navigation on the right */}
          <nav className="flex-1 flex justify-end">
            <ul className="flex gap-8 uppercase font-medium">
              <li>
                <Link to="/" className="hover:text-blue-600 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-600 transition duration-300">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-blue-600 transition duration-300">
                  Contacts
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

