import { Link } from "react-router-dom"
import React from "react"

const Footer: React.FC = () =>{
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
              <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Shop Vợt Cầu Lông. All rights reserved.</p>
                <nav>
                <ul className="flex justify-center gap-4 mt-2">
                    <li>
                    <Link to="/privacy" className="hover:underline">Chính sách bảo mật</Link>
                    </li>
                    <li>
                    <Link to="/terms" className="hover:underline">Điều khoản sử dụng</Link>
                    </li>
                </ul>
                </nav>
            </div>

        </footer>
    )
}

export default Footer