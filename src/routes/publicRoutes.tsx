import { RouteObject } from 'react-router-dom'
import HomePage from '../pages/user/HomePage'
import About from '../pages/user/About'
import Blog from '../pages/user/Blog'
import PostDetail from '@/pages/user/PostDetail'
// Import your public pages here


const Contact = () => <div>Contact Page</div>

const publicRoutes: RouteObject[] = [
  {
    path: '', // This will be /
    element: <HomePage  />
  },
  {
    path: 'about', // This will be /about
    element: <About />
  },
  {
    path: 'contact', // This will be /contact
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