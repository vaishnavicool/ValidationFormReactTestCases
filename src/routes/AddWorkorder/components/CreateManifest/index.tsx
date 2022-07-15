import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import Form from "shared/Form"
import "./style.scss"
const CreateManifest = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-6 addmanifeast-container">
        <Form config={pageConfig?.addManifestConfig} />
      </div>
      <div className="col-6 addmanifeast-container"> Right Panel </div>
    </div>
  )
}

export default CreateManifest
