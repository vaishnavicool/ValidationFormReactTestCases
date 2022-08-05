import "./style.scss"
import Image from "shared/Image"
import enhancer from "./enhancer"
import { Link, NavLink } from "react-router-dom"
function Header(props: any) {
  return (
    <div className="row col-12 p-0 m-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <Image
            src="swiftwinlogo.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          SwiftWin
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/routes/Add">
                AddUser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/routes/Edit">
                EditUser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/routes/View">
                ViewUser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                DeleteUser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light m-4" to="/">
         Back
        </Link>

        {/* <Image src="swiftwinlogo.png" alt="Swiftwin" className="logo-img" /> */}
      </nav>
    </div>
  )
}
export default enhancer(Header)
