import "./style.scss"
import { FormattedMessage } from "react-intl"

function TopSection(props: any) {
  let {children} = props
  return (
    <>
      <div className="mainContainer">
        <div className="content">
          <FormattedMessage id="breadcrumb" />
        </div>
       {children}
      </div>
    </>
  )
}
export default TopSection
