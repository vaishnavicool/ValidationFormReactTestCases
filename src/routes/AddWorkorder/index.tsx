import { pageConfig } from "./config"
import Form from "shared/Form"
import Topsection from "shared/Topsection"
import "./style.scss"
import Image from "shared/Image"

const AddWorkorder = () => {
  return (
    <>
      <Topsection>
        <div className="button-container">
          <input
            className="btn-addworkorder-cancel"
            value="Cancel"
            type="button"
          />
          <input className="btn-addworkorder-add" value="Add" type="button" />
        </div>
      </Topsection>

      <div className="d-flex mx-4">
        <div className="col-9 row">
          <Form config={pageConfig?.addWorkOrderConfig} />
        </div>
        <div className="col-3 d-flex flex-column">
          <div className=" manifest-container">
            <div className="title">Manifests</div>
            <input
              className="btn-right-panel"
              value="+ Add New Manifest"
              type="button"
            />
          </div>
          <div className="invoice-container">
            <div className="title">Invoices</div>
            <input
              className="btn-right-panel"
              value="+ Add New Invoice"
              type="button"   
            />
          </div>
          <div className="btn-downarrow">
        <Image src="ic_down_arrow.png" />
      </div>
        </div>
      </div>
    </>
  )
}

export default AddWorkorder
