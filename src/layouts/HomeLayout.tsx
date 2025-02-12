import { Outlet} from 'react-router-dom'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'

const HomeLayout = () => {
   
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
      <Header></Header>
  
        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto py-6 px-8">
            <Outlet />
          </div>
        </main>
  
      <Footer></Footer>
      </div>
    )
  }
  
export default HomeLayout
  