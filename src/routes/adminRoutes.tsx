import { RouteObject } from 'react-router-dom'
import PostList from '@/pages/admin/posts/PostList'
import AdminDashboard from '../pages/admin/AdminDashboard'
import PrivateRoute from '../components/PrivateRoutes'
import PostDetail from '@/pages/user/PostDetail'
import PostForm from '@/pages/admin/posts/PostForm'
// Import your admin pages here
const adminRoutes: RouteObject[] = [
 
 
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