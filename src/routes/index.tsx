import { RouteObject } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout.tsx'
import adminRoutes from './adminRoutes'
import publicRoutes from './publicRoutes'
import Login from '../pages/Login.tsx'
import AdminLayout from '../layouts/AdminLayout.tsx'
import loginRoutes from './loginRoutes.tsx'

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