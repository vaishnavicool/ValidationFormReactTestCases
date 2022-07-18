import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import Form from "shared/Form"
import "./style.scss"
const Newgenrator = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-6 ">
        <Form config={pageConfig?.addNewGeneratorConfig} />
      </div>
      <div className="col-6"> Right Panel </div>
    </div>
  )
}

export default Newgenrator
