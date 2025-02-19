import { RouteObject } from 'react-router-dom'
import Login from '../pages/admin/AdminLogin'
import PostList from '../pages/admin/PostList'
import AdminDashboard from '../pages/admin/AdminDashboard'
import PrivateRoute from '../components/PrivateRoutes'
// Import your admin pages here
const adminRoutes: RouteObject[] = [
 
 
  {
    path:'login',
    element:<Login/>
  },
  
  {
    path: "",
    element: <PrivateRoute />, // Kiểm tra đăng nhập
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "posts", element: <PostList /> },
    ],
  },
]

export default adminRoutes