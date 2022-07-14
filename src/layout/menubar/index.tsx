import "./style.scss"

import { Dropdown } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"
import menuConfig from "./config"
import { useLocation, useNavigate } from "react-router-dom"
import { url } from "inspector"

const Menubar = () => {
  let navigate = useNavigate()
  let { pathname } = useLocation()
  let goTo = (path) => {
    if (path.includes("aspx")) window.location.href = path
    else navigate(path)
  }
  return (
    <>
      <div className="menu-list">
        <div className="menubar">
          {menuConfig.map((d, index) => {
            let imgPath = require("assets/icon/" + d.icon + "_grey.png")
            let imgPathHover = require("assets/icon/" +
              d.icon +
              "_white.png")
            let styledata = {
              "--my-image": `url(${imgPath})`,
              "--hover-image": `url(${imgPathHover})`,
            }
            return (
              <>
                <div
                  className="col menu-item"
                  key={index}
                >
                  <Image src={`${d.icon}_white.png`} className="white"/>
                  <Image src={`${d.icon}_grey.png`} className="grey"/>
                  {d?.children?.length && <div className="col drop-menu">
                    <div className="arrow-left" />
                    {d?.children?.map((child) => (
                      <div className="drop-item" key={child.path} onClick={() => goTo(child.path)}>
                        <FormattedMessage id={child.title} />
                      </div>
                    ))}
                  </div>}
                  <FormattedMessage id={d.title} />
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Menubar
