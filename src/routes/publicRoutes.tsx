import { RouteObject } from 'react-router-dom'

// Import your public pages here
const Home = () => <div>Home Page</div>
const About = () => <div>About Page</div>
const Contact = () => <div>Contact Page</div>

const publicRoutes: RouteObject[] = [
  {
    path: '', // This will be /
    element: <Home />
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