import "./style.scss"
import Image from "shared/Image"
import enhancer from "./enhancer"
import menuConfig from "./config"
import { FormattedMessage } from "react-intl"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Header = () => {
  let navigate = useNavigate()
  let goTo = (path) => {
    if (path.includes("aspx")) window.location.href = path
    else navigate(path)
  }
  return (
    <>
      <div className="row col-12 p-0 m-0">
        <nav className="navbar navbar-expand-lg navbar-light nav_border">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Image src="swiftwinlogo.png" className="logo_img" />
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {menuConfig.map((d, i) => (
                  <li className="menu-item" key={i}>
                    {d?.children?.length && (
                      <div className="drop-menu">
                          {d?.children?.map((child) => (
                            <li
                              className="drop-item"
                              key={child.path}
                              onClick={() => goTo(child.path)}
                            >
                              <FormattedMessage id={child.title} />
                            </li>
                          ))}                  
                      </div>
                    )}
                    <Link to={d.path}>
                      <FormattedMessage id={d.title} />
                    </Link>
                  </li>
                ))}
              </ul>
              <svg className="bi bi-bell-fill bell-icon">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              <img
                src="https://github.com/mdo.png"
                className="rounded-circle "
                height="40"
                width="40"
                alt="mdo"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default enhancer(Header)
