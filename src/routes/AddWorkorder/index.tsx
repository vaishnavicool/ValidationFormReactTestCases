import { pageConfig } from "./config"
import Form from "shared/Form"
import Topsection from "shared/Topsection"
import "./style.scss"
import Image from "shared/Image"
import ModalForm from "shared/ModalForm"
import useEnhancer from "./enhancer"
import CreateManifest from "./components/CreateManifest"
import { useNavigate } from "react-router-dom"
const AddWorkorder = (props) => {
  let { showManifest, setShowManifest } = useEnhancer()
  let navigate = useNavigate()
  return (
    <>
      <Topsection>
        <div className="button-container">
          <input
            className="btn-addworkorder-cancel"
            value="Cancel"
            type="button"
            onClick={()=>navigate("/workorder")}
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
              onClick={() => setShowManifest(true)}
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
      <ModalForm show={showManifest} setShow={setShowManifest} largeModal={true} pageTitle={"Add New Manifest"}>
        <CreateManifest />
      </ModalForm>
    </>
  )
}

export default AddWorkorder
