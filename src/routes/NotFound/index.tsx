import "./style.scss"

import { FunctionComponent } from "react"


const Notfound: FunctionComponent = () => {
  return (
    <div
      className="container"
      style={{
        minHeight: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      Page Not Found
    </div>
  )
}
export default Notfound
