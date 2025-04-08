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
          <div className="">
            <Outlet />
          </div>
        </main>
  
      <Footer></Footer>
      </div>
    )
  }
  
export default HomeLayout
  