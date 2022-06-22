import "./style.scss"

import { Dropdown } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"
import React from "react"
import menuConfig from "./config"

const Menubar = () => {
  return (
    <>
      <div>
        <Image className="menu-icon" src="menu-icon.png" alt="sortIcon" />
        <Image src="Logo.png" alt="coreLogo" className="logo-img" />
      </div>
      <div className="menu-list">
        <div className="menubar">
          {menuConfig.map((d, index) =>
            !d.children ? (
              <div className="col" key={index}>
                <div className="custom-dropdown">
                  <button
                    type="button"
                    id="dropdown-basic"
                    aria-expanded="false"
                    className="bg-transparent border-0 custom-dropdown btn btn-light"
                  >
                    <FormattedMessage id={d.title} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="col">
                <Dropdown drop="end">
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
      </div>
    </>
  )
}

export default Menubar
