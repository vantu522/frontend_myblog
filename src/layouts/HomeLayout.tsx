import { Outlet, Link, useLocation } from 'react-router-dom'

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
        <header className="bg-white shadow-sm w-full">
          <nav className="max-w-7xl mx-auto px-8">
            <div className="flex h-16">
              {/* Logo & Navigation */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold">Logo</span>
                </div>
                <div className="ml-6 flex space-x-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        location.pathname === item.path
                          ? 'border-blue-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </header>
  
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
  