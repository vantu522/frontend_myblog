import { RouteObject } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout.tsx'
import adminRoutes from './adminRoutes'
import publicRoutes from './publicRoutes'
import PrivateRoute from '../components/PrivateRoutes.tsx'
import Login from '../pages/Login.tsx'
import AdminLayout from '../layouts/AdminLayout.tsx'

const routes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: adminRoutes
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: publicRoutes
  },
  {
    path:'/login',
    element:<Login/>,
  }

]

export default routes