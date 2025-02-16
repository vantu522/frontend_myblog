import { Link } from "react-router-dom"
import React, { useState } from "react"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer: React.FC = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Xử lý logic gửi email ở đây
        console.log("Submitted:", { email, message })
        setEmail("")
        setMessage("")
    }

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Thông tin cửa hàng */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">BLOG-TDV</h3>
                        <div className="space-y-2">
                            <p className="flex items-center gap-2">
                                <MapPin size={16} />
                                Quận Hà Đông, Hà Nội
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone size={16} />
                                03932**765
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={16} />
                                tudgvan2305@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Liên kết</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="hover:text-gray-300">Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-gray-300">Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-gray-300">Điều khoản sử dụng</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-300">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Form liên hệ */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Đăng ký nhận tin</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email của bạn"
                                    className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Lời nhắn"
                                    className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                                    rows={3}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                            >
                                Gửi
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} Blog-TDV. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400"
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer