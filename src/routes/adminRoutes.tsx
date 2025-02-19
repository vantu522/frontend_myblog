import { RouteObject } from 'react-router-dom'
import Login from '../pages/admin/AdminLogin'
// Import your admin pages here
const AdminDashboard = () => <div>Admin Dashboard</div>

const adminRoutes: RouteObject[] = [
  {
    path: '',  // This will be /admin
    element: <AdminDashboard />
  },

  {
    path:'login',
    element:<Login/>
  }
]

export default adminRoutes