import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'

import "react-toastify/dist/ReactToastify.css";
import PoeChatButton from './components/ChatBot';


const AppRoutes = () => {
  const element = useRoutes(routes)  
  return element
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes  />
      <PoeChatButton/>
    </BrowserRouter>
  )
}

export default App