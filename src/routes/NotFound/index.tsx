import React, { FunctionComponent } from "react"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"

const Notfound: FunctionComponent = () => {
  return (
    <div className="container" style={{minHeight:"70vh",display:'flex',justifyContent:'center',alignItems:'center'}}>
      {/* <div className=""> */}
        <Image src="ic_404.png" />
      {/* </div> */}
    </div>
  )
}
export default Notfound
