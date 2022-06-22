import React from "react"
import enhancer from "./enhancer"
import "./style.scss"
import Image from "shared/Image"
import { FormattedMessage } from "react-intl"
import { Row } from "react-bootstrap"

function Header(props: any) {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <a className="navbar-brand" href="#">
        <Image src="core-logo.png" alt="coreLogo" />
      </a>

      <div className=" justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav flex-row">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <Image src="bell.png" alt="bellLogo" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Image src="Grid.png" alt="gridLogo" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Image src="question-mark.png" alt="questionMarkLogo" />
            </a>
          </li>
          <li className="nav-item">
            <Row>
              <a className="nav-link" href="#">
              <Image
                className="profile-icon"
                src="Profile.png"
                alt="ProfileIcon"
              />
              <span className="profile-text">
                <FormattedMessage id="header.welcome_message" />
              </span>
            </a>
            </Row>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default enhancer(Header)
