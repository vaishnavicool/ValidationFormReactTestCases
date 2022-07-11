import { pageConfig } from "./config"
import Form from "shared/Form"
import TopSection from "./components/breadcrumb"
import "./style.scss"
const AddWorkorder = () => {
  return (
    <>
    <TopSection />

    <div className="d-flex mx-4">
      <div className="col-9 row"><Form config={pageConfig?.addWorkOrderConfig} /></div>
      <div className="col-3 d-flex flex-column">
        <div className=" manifest-container">
          <div className="title">Manifests</div>
          <input className="btn-right-panel" value="+ Add New Manifest" type="button" />
        </div>
        <div className="invoice-container">
          <div className="title">Invoices</div>
          <input className="btn-right-panel" value="+ Add New Invoice" type="button" />
        </div>
      </div>
    </div>
    </>
  )
}

export default AddWorkorder
