import "./style.scss"

import { FunctionComponent } from "react"
import Image from "shared/Image"

const Notfound: FunctionComponent = () => {
  return (
    <div
      className="container"
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      {/* <div className=""> */}
      <Image src="ic_404.png" />
      <div className="text-404">Opps. Page not found</div>
      {/* </div> */}
    </div>
  )
}
export default Notfound
