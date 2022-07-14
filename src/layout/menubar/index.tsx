import "./style.scss"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"
import menuConfig from "./config"
import {  useNavigate } from "react-router-dom"

const Menubar = () => {
  let navigate = useNavigate()
  let goTo = (path) => {
    if (path.includes("aspx")) window.location.href = path
    else navigate(path)
  }
  return (
    <>
      <div className="menu-list">
        <div className="menubar">
          {menuConfig.map((d, index) => {            
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
