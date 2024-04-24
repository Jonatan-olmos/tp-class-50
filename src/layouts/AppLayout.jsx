import '../App.css'

import { SiderBar } from '../components/Siderbar'
import { TopBar } from '../components/Topbar';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

function AppLayout() {


  return (

    <div id="wrapper">

      <SiderBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

          <TopBar />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

<Outlet/>

          </div>
        </div>
        <Footer/>
      </div>
    </div>

  )
}

export default AppLayout