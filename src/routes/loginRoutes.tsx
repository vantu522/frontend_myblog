import { RouteObject } from 'react-router-dom'
import Login from '../pages/Login'

// Import your public pages here



const loginRoutes: RouteObject[] = [
  {
    path: '', // This will be /
    element: <Login  />
  }
  
  
 
]

export default loginRoutes