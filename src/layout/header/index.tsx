import "./style.scss"
import enhancer from "./enhancer"
import Menubar from "../menubar"

function Header() {
  return (
    <>
     <Menubar />
    </>
  )
}
export default enhancer(Header)
