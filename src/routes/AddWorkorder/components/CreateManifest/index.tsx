import React from "react"
import { pageConfig } from "routes/AddWorkorder/config"
import Image from "shared/Image"
import Form from "shared/Form"
import "./style.scss"
import Field from "shared/Field"

const CreateManifest = () => {
  return (
    <>
      <div className="d-flex col-12 p-3">
        <div className="col-6 left-section">
          <Form config={pageConfig?.addManifestConfig} />
          <div>
            <Image src="ic_add.png" />
          </div>
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
            <div>Details</div>
            <div>Copy Menifes</div>
            <div>Receiving Logs</div>
            <div>Fix DOTs</div>
            <div>Print Options</div>
            <div>Tracking Report</div>
            <div>ReSend to OnBase</div>
            <div>Delete</div>
          </div>
          <div>
            <div className="leftitem-container">
              <div className="left-text">Documents</div>
              <div className="left-textsmall">
                What type of files are you uploading?{" "}
                <span className="icon-info">
                  <Image
                    src="ic_info.png"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  />
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
          <div className=" row tablefooter-container">
            <div className="blackbox"></div>
            <div className="tablefooter-text">Table Comes here</div>
          </div>
          <div className="footer-text">Note</div>
          <div className="footer-subtext">
            if the file you have selected did not appear, your browser might
            have a pop up blocker. Please disable that.
          </div>
          <div className="downarrow-img">
            <Image src="ic_down_arrow.png" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center g-0">
        <input
          className="btn-addworkorder-cancel"
          value="Cancel"
          type="button"
        />
        <input
          className="btn-addworkorder-add"
          value="Save Manifest"
          type="button"
        />
      </div>
    </>
  )
}

export default CreateManifest
