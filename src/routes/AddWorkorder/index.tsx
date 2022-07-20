import { pageConfig } from "./config"
import Form from "shared/Form"
import Topsection from "shared/Topsection"
import "./style.scss"
import Image from "shared/Image"
import ModalForm from "shared/ModalForm"
import useEnhancer from "./enhancer"
import CreateManifest from "./components/CreateManifest"
import { useNavigate } from "react-router-dom"
import NewGenerator from "./components/NewGenerator"

const AddWorkorder = (props: any) => {
  let allProps = useEnhancer()
  let { showManifest, setShowManifest,showNewGenerator,setShowNewGenerator,updateWorkOrder,popup,setPopup } = useEnhancer()
  let navigate = useNavigate()
  return (
    <>
      <Topsection>
        <div className="button-container">
          <input
            className="btn-addworkorder-cancel"
            value="Cancel"
            type="button"
            onClick={()=>navigate("/customer_processing/work_order")}
          />
          <input className="btn-addworkorder-add" value="Add" type="button" />
        </div>
      </Topsection>

      <div className="d-flex mx-4">
        <div className="col-9 row">
          <Form config={pageConfig?.addWorkOrderConfig} update={updateWorkOrder}/>
          
        </div>
        <div className="col-3 d-flex flex-column">
          <div className=" manifest-container">
            <div className="title">Manifests</div>
            <input
              className="btn-right-panel"
              value="+ Add New Manifest"
              type="button"
              onClick={() => setPopup('manifest')}
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
        </div>
      </div>
      {console.log(popup)}
      <ModalForm show={popup == 'manifest'} setShow={()=> setPopup('manifest')} largeModal={true} pageTitle={"Add New Manifest"} >
        <CreateManifest {...allProps}/>
      </ModalForm>
      <ModalForm show={popup == 'generator'} setShow={()=> setPopup('generator')} largeModal={true} pageTitle={"Add New Generator"}>
        <NewGenerator {...allProps} />
      </ModalForm>
    </>
  )
}

export default AddWorkorder
