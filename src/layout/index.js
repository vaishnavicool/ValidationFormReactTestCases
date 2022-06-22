import './style.scss'

import Footer from "./footer"
import Header from "./header"
import Menubar from "./menubar"
import { PreLoad } from "shared/Image"
import React from "react"
import Routes from "routes"

function MainWrapper(props) {
  return (
    // <div>
    //   <div className="header container-fluid">
    //     <Header />
    //   </div>
    //   <div className="header container-fluid">
    //     <Menubar />
    //   </div>
    //   <div className="page">
    //     <Routes />
    //   </div>
    //   <div className="footer">
    //     <Footer />
    //     <PreLoad />
    //   </div>
    // </div>
    <div className="container-fluid layout">
      <div className='row'>
      <div className='col-2 left-container'><Menubar /></div>
      <div className='col-10 g-0'>
        <div className='header-container'><Header /></div>
        <div className='breadcrum-container'>Breadcrumb</div>
        <div className='filterchip-container'>FIlter chips</div>
        <div className='table-container'>DatTable</div>
        <div className='footer-container'><Footer /><PreLoad /></div>
      </div>
      </div>
      
    </div>
  )
}
export default MainWrapper
