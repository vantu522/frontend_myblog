import { Outlet, Link, useLocation } from 'react-router-dom'
import Header from '../components/Header/header'

const HomeLayout = () => {
    const location = useLocation()
  
    const menuItems = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/contact', label: 'Contact' }
    ]
  
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
      <Header></Header>
  
        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto py-6 px-8">
            <Outlet />
          </div>
        </main>
  
        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-6 px-8">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    )
  }
  
export default HomeLayout
  