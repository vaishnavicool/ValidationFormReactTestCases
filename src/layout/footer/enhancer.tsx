import React, { FunctionComponent } from "react"

let enhancer =
  (Component: FunctionComponent) =>
  ({ ...props }) => {
    return <Component {...props} />
  }

export default enhancer
