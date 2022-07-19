import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import useEnhancer from "routes/AddWorkorder/enhancer"
import Form from "shared/Form"
import "./style.scss"

const Newgenerator = (props) => {
  let { hideGenerator } = useEnhancer()

  return (
    <>
      <div className="d-flex col-12">
        <div className="col-6 ">
          <Form config={pageConfig?.addNewGeneratorConfig} />
        </div>
        <div className="col-6 gen-right-section">
          <div className="right-head">Mailing Information</div>
          <div className="gen-right-container">
            <div className="datails-text">Details Comes here</div>
          </div>
           </div>
      </div>
      <div className="d-flex justify-content-center g-0 position-relative">
      <input
          className=" btn-back-to-manifest-panel"
          value="Back to manifest"
          onClick={()=>hideGenerator()}
          type="button"
        />
     
        <input
          className="btn-addworkorder-cancel"
          value="Cancel"
          type="button"
        />
        <input
          className="btn-addworkorder-add"
          value="Save Generator"
          type="button"
        />
      </div>
    </>
  )
}

export default Newgenerator
