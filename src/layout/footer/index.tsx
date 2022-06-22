import React, { Fragment } from "react"
import enhancer from "./enhancer"
import "./style.scss"
import { FormattedMessage } from "react-intl"

const Footer: React.FunctionComponent = (props: any) => {
  return (
    <Fragment>
      <footer className="row">
        <p className=" col-auto ">
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
      </footer>
    </Fragment>
  )
}
export default enhancer(Footer)
