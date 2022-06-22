import React, { Fragment } from "react"
import "./style.scss"
import { Dropdown } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import menuConfig from "./config"

function Menubar(props: any) {
  return (
    <>
      <div className="menubar row">
        {menuConfig.map((d, index) =>
          !d.children ? (
            <div className="col" key={index}>
              <div className="custom-dropdown">
                <button
                  type="button"
                  id="dropdown-basic"
                  aria-expanded="false"
                  className="bg-transparent border-0 custom-dropdown  btn btn-light"
                >
                <FormattedMessage id={d.title} />

                </button>
              </div>
            </div>
          ) : (
            <div className="col">
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="bg-transparent border-0 custom-dropdown"
                >
                  <FormattedMessage id={d.title} />
                  
                </Dropdown.Toggle>
                <Dropdown.Menu className="menu">
                  {d.children.map((child) => (
                    <Dropdown.Item key={child.path} href={child.path}>
                      <FormattedMessage id={child.title} />
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )
        )}
      </div>
    </>
  )
}
export default Menubar
