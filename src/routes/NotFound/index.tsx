import React, { FunctionComponent } from "react"
import { FormattedMessage } from "react-intl"

const Notfound: FunctionComponent = () => {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center font-weight-bold">
        <FormattedMessage id="notfound.error.title" />
        <br />
        <FormattedMessage id="notfound.error.message" />
      </div>
    </div>
  )
}
export default Notfound
