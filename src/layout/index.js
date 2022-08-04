// import "./style.scss"
// import AddUser from "routes/Add"
// import EditUser from "routes/Edit"
// import View from "routes/View"
// import Footer from "./footer"
// import Header from "./header"
// import { PreLoad } from "shared/Image"
// import { Routes, Route } from "react-router-dom"
// import About from "routes/About"
// import Dashboard from "./dashboard"

// function MainWrapper(props) {
//   return (
//     <div>
//       <div>
//         <Header />
//       </div>

//       <div>
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/routes/Add" element={<AddUser />} />
//           <Route path="/routes/Edit/:id" element={<EditUser />} />
//           <Route path="/routes/view/:id" element={<View />} />
//         </Routes>
//       </div>

//       <div className="footer-container">
//         <Footer />
//         <PreLoad />
//       </div>
//     </div>
//   )
// }
// export default MainWrapper
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
        {/* <div className="col-1 left-container">
          <Menubar />
        </div> */}
        <div className="col-11 g-0" >
          <div className="" style={{minHeight:"70vh"}}>
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
