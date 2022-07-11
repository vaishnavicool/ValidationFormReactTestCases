import "./style.scss"
import { FormattedMessage } from "react-intl"

function Breadcrumb() {
  return (
    <>
      <div className="mainContainer">
        <div className="content">
          <FormattedMessage id="addworkorder.breadcrumb" />
        </div>
        <div className="button-container">
          <input className="btn-addworkorder" value="Cancel" type="button" />
          <input className="btn-addworkorder" value="Add" type="button" />
        </div>
      </div>
    </>
  )
}
export default Breadcrumb
