import "./style.scss"
import { FormattedMessage } from "react-intl"
import { useNavigate } from "react-router-dom"

function TopSection(props: any) {
  // let { setModalType, setShow } = props
  let navigate = useNavigate()
  return (
    <>
      <div className="mainContainer">
        <div className="content">
          <FormattedMessage id="breadcrumb" />
        </div>
        <div className="button-container">
          <input
            className="btn-addworkorder"
            value="+ Add Workorder"
            type="button"
            onClick={() => {
              navigate("/AddWorkorder")
            }}
          />
        </div>
      </div>
    </>
  )
}
export default TopSection
