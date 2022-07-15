import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import Form from "shared/Form"
import "./style.scss"
const CreateManifest = () => {
  return (
    <div className="d-flex">
      <div className="col-12 addmanifeast-container">
        <Form config={pageConfig?.addNewGeneratorConfig} />
      </div>
      {/* <div className="col-6"> Right Panel </div> */}
    </div>
  )
}

export default CreateManifest
