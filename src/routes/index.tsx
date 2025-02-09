import { RouteObject } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout.tsx'
import HomeLayout from '../layouts/HomeLayout.tsx'
import adminRoutes from './adminRoutes'
import publicRoutes from './publicRoutes'

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
  }
]

export default routes