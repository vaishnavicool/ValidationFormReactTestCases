import "./style.scss"

import Footer from "./footer"
import Header from "./header"
import Menubar from "./menubar"
import { PreLoad } from "shared/Image"
import Routes from "routes"

function MainWrapper(props) {
  return (
    <div className="container-fluid layout p-0">
      <div className="header-container">
        <Header />
      </div>
      <div className="row no-gutters">
        <div className="col-1 left-container">
          <Menubar />
        </div>
        <div className="col-11 g-0">
          <div className="">
            <Routes />
          </div>
          <div className="footer-container">
            <Footer />
            <PreLoad />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainWrapper
