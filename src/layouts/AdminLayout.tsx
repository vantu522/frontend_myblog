import { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Package, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'

const AdminLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
 
    useEffect(() =>{
      const token = localStorage.getItem('token')
      if(!token){ 
        
        navigate('/login')
      }
    },[navigate])

    const menuItems = [
      { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
      { path: '/admin/posts', icon: <Users size={20} />, label: 'Quản lý bài viết' },
      { path: '/admin/#', icon: <Package size={20} />, label: 'Cài đặt' }
    ]
  
    const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/login')
    }
  
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-white shadow-lg transition-all duration-300`}>
          {/* Sidebar Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            {!isCollapsed && <span className="text-xl font-semibold">Admin</span>}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>
  
          {/* Navigation Menu */}
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-100 ${
                      location.pathname === item.path ? 'bg-blue-50 text-blue-600' : ''
                    }`}
                  >
                    {item.icon}
                    {!isCollapsed && <span className="ml-3">{item.label}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
  
          {/* Logout Button */}
          <div className="absolute bottom-4 px-4">
            <button
              onClick={handleLogout}
              className="flex items-center p-3  rounded-lg hover:bg-red-50 text-red-600"
            >
              <LogOut size={20} />
              {!isCollapsed && <span className="ml-3">Đăng xuất</span>}
            </button>
          </div>
        </aside>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header */}
          <header className="h-16 bg-white shadow-sm flex items-center px-6">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
          </header>
  
          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    )
  }
  
  
export default AdminLayout