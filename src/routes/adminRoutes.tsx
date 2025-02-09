import { RouteObject } from 'react-router-dom'

// Import your admin pages here
const AdminDashboard = () => <div>Admin Dashboard</div>
const UserManagement = () => <div>User Management</div>
const ProductManagement = () => <div>Product Management</div>

const adminRoutes: RouteObject[] = [
  {
    path: '',  // This will be /admin
    element: <AdminDashboard />
  },
  {
    path: 'users', // This will be /admin/users
    element: <UserManagement />
  },
  {
    path: 'products', // This will be /admin/products
    element: <ProductManagement />
  }
]

export default adminRoutes