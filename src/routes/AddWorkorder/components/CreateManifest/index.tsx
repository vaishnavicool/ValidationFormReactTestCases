import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import Image from "shared/Image"
import Form from "shared/Form"
import "./style.scss"
const CreateManifest = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-6 addmanifeast-container">
        <Form config={pageConfig?.addManifestConfig} />
      </div>
      <div className="col-6 addmanifeast-container">
      <div className="rightitem-dots">
            <Image src="dots.png" />
          </div>
        <div className="rightitem-container">
          <div className="rightitems-text">More Actions</div>
          <div className="rightitem-link">All actions open in new tab</div>
        </div>
      </div>
    </div>
  )
}

export default CreateManifest
