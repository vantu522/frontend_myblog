import { RouteObject } from 'react-router-dom'
import HomePage from '../pages/user/HomePage'
import About from '../pages/user/About'
import Blog from '../pages/user/Blog'
import PostDetail from '@/pages/user/PostDetail'
// Import your public pages here


const Contact = () => <div>Contact Page</div>

const publicRoutes: RouteObject[] = [
  {
    path: '', 
    element: <HomePage  />
  },
  {
    path: 'about', 
    element: <About />
  },
  {
    path: 'contact', 
    element: <Contact />
  }, 
  {
    path:'blog-me',
    element: <Blog/>
  },
  {
    path:"posts/:id",
    element:<PostDetail/>
  }
    ,


  
 
]

export default publicRoutes