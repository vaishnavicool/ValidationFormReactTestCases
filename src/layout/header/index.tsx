import "./style.scss"

import Image from "shared/Image"
import enhancer from "./enhancer"

function Header(props: any) {
  return (
    <div>
        <Image className="menu-icon" src="menu-icon.png" alt="sortIcon" />
        <Image src="Logo.png" alt="coreLogo" className="logo-img" />
      </div>
  )
}
export default enhancer(Header)
