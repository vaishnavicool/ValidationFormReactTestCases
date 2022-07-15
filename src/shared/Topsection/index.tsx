import "./style.scss"
import Breadcrumb from "./breadcrumb"


function TopSection(props: any) {
  let {children} = props
  return (
    <>
      <div className="mainContainer">
        <Breadcrumb/>
      {children} 
      </div>
    </>
  )
}
export default TopSection
