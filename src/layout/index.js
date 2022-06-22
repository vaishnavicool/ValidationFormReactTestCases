import React from "react"
import { PreLoad } from "shared/Image"
import Header from "./header"
import Footer from "./footer"
import Routes from "routes"
import Menubar from "./menubar"
import './style.scss'
function MainWrapper(props) {
  return (
    <div>
      <div className="header container-fluid">
        <Header />
      </div>
      <div className="header container-fluid">
        <Menubar />
      </div>
      <div className="page">
        <Routes />
      </div>
      <div className="footer">
        <Footer />
        <PreLoad />
      </div>
    </div>
  )
}
export default MainWrapper
