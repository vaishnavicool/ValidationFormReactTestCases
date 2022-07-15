import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import Image from "shared/Image"
import Form from "shared/Form"
import "./style.scss"
import Field from "shared/Field"
const CreateManifest = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-6">
        <Form config={pageConfig?.addManifestConfig} />
      </div>
      <div className="col-6 right-section">
        <div className="rightitem-dots">
          <Image src="dots.png" />
        </div>
        <div className="rightitem-container">
          <div className="rightitems-text">More Actions</div>
          <div className="rightitem-link">All actions open in new tab</div>
        </div>
        <div className="leftitem-container">
          <div className="left-text">Documents</div>
          <div className="left-textsmall">
            What type of files are you uploading?{" "}
            <span className="icon-info">
              <Image src="ic_info.png" />
            </span>
          </div>
        </div>
        <div className="grey-container">
          <Field 
          width= "col-5"
          type="dropdown"
          placeholder="Manifest"
          name={"documenttype"}
            />
          <div>
            <span className="instruction-text">
              Instructions
              <br />
            </span>
            <span>
             
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateManifest
