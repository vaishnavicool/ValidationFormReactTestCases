import React, { Fragment } from "react"
import enhancer from "./enhancer"
import "./style.scss"
import { FormattedMessage } from "react-intl"

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
      </footer>
    </Fragment>
  )
}
export default enhancer(Footer)
