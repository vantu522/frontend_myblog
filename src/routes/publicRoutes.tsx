import { RouteObject } from 'react-router-dom'
import HomePage from '../pages/user/HomePage'

// Import your public pages here

const About = () => <div>About Page</div>
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
  }
]

export default publicRoutes