import React, { Fragment } from "react"
import "./style.scss"
import { FormattedMessage } from "react-intl"

function TopSection(props: any) {
  return (
    <Fragment>
      <div className="mainContainer">
        <div className="content">
          <FormattedMessage id="breadcrumb" />
        </div>
        <div className="button-container">
          <input
            className="btn-addworkorder"
            value="+ Add Workorder"
            type="button"
          />
        </div>
      </div>
    </Fragment>
  )
}
export default TopSection
