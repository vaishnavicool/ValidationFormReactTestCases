import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import Image from "shared/Image"
import Form from "shared/Form"
import "./style.scss"
import Field from "shared/Field"

const CreateManifest = () => {
  return (
    <div className="d-flex col-12 p-3">
      <div className="col-6 left-section">
        <Form config={pageConfig?.addManifestConfig} />
      </div>
      <div className="col-6 right-section">
        <div>
          <div className="rightitem-dots">
            <Image src="dots.png" />
          </div>
          <div className="rightitem-container">
            <div className="rightitems-text">More Actions</div>
            <div className="rightitem-link">All actions open in new tab</div>
          </div>
        </div>
        <div>
          <div className="leftitem-container">
            <div className="left-text">Documents</div>
            <div className="left-textsmall">
              What type of files are you uploading?{" "}
              <span className="icon-info">
                <Image src="ic_info.png" />
              </span>
            </div>
          </div>
        </div>
        <div className="grey-container row">
          <Field
              type="dropdown"
              placeholder="Manifest"
              name={"documenttype"}
              width="col-5 gx-2"
            />
           <Field
              type="file"
              placeholder="Select Document"
              name={"documenttype"}
              width="col-5 gx-2"
            />
          <input
              className="btn-upload col-2 mb-3"
              value="Upload"
              type="button"
            />

          <div className="instruction-text">Instructions</div>
          <div className="instruction-sub-text">{`You must select a file with these extensions: pdf,jpg,jpeg,png,gif`}</div>
          <div className="instruction-sub-text">{`After the file is selected, if you see a red dot, it means the file is not accepted. A green dot means the file is uploaded successfully.`}</div>
          <div className="instruction-sub-text">{`Any spaces, "&", "." or "+" characters in the file name will be replaced with an "_" character`}</div>
        </div>
      </div>
    </div>
  )
}

export default CreateManifest
