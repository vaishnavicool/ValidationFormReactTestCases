import React, { Fragment } from "react"
import enhancer from "./enhancer"
import "./style.scss"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"


const Footer: React.FunctionComponent = (props: any) => {
  return (
    <Fragment>
      <footer className="row">
        <p
          className=" col-auto "
          style={{ marginRight: "50px", marginLeft: "6px" }}
        >
          <FormattedMessage id="footer.message" />
        </p>
        <a className="text-decoration-none footer-link col-auto p-0" href="#a">
          <FormattedMessage id="footer.link-setpage" />
        </a>
        <a className="text-decoration-none footer-link col-auto p-0" href="#a">
          <FormattedMessage id="footer.link-setcontrol" />
        </a>
        <a className="text-decoration-none footer-link col-auto p-0" href="#a">
          <FormattedMessage id="footer.link-technical" />
        </a>
        <a className="text-decoration-none footer-link col-auto p-0" href="#a">
          <FormattedMessage id="footer.link-user" />
        </a>
        <div className="menu-footer-icon">
        <Image src="ce_logo.png" />
      </div>
      </footer>
      
    </Fragment>
    
  )
}
export default enhancer(Footer)
