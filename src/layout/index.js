import "./style.scss"
import Footer from "./footer"
import Header from "./header"
import { PreLoad } from "shared/Image"
import Routes from "routes"
import Breadcrumb from "shared/Breadcrum"
import DateInFormat from "shared/DateInFormat"

function MainWrapper(props) {
  return (
    <div className="container-fluid layout p-0">
      <div className="header-container">
        <Header />
      </div>
      <DateInFormat />
      <div className="container">
      <Breadcrumb />
      </div>
     
      <div>
        <Routes />
      </div>
      <div className="footer-container">
        <Footer />
        <PreLoad />
      </div>
    </div>
  )
}
export default MainWrapper
