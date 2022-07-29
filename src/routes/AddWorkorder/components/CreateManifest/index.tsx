import "./style.scss"
import Field from "shared/Field"
import Form from "shared/Form"
import Image from "shared/Image"
import { pageConfig } from "routes/AddWorkorder/config"
import { useDetectClickOutside } from "react-detect-click-outside"


const CreateManifest = (props) => {
  let {
    onSubmit,
    showMoreAction,
    setShowMoreAction,
    onHide,
    handlers,
    updateManifest,
    manifest,
    saveManifest,
    allDropdownOpts,
    selectDocumentFile,
    documentToUpload,
    file
  } = props

 console.log("++",file)
              
  const moreActionMenuClick = useDetectClickOutside({
    onTriggered: () => setShowMoreAction(false),
  })
  return (
    <>
      <div>
        <div className="d-flex col-12 p-3">
          <div className="col-6 left-section">
            <Form
              config={pageConfig?.addManifestConfig}
              update={updateManifest}
              filters={manifest}
              handlers={handlers}
              allDropdownOpts={allDropdownOpts}
            />
          </div>
          <div className="col-6 right-section">
            <div>
              <div
                className="rightitem-dots"
                ref={moreActionMenuClick}
                onClick={() => setShowMoreAction(true)}
              >
                <Image src="dots.png" />
              </div>
              <div className="rightitem-container">
                <div className="rightitems-text">More Actions</div>
                <div className="rightitem-link">
                  All actions open in new tab
                </div>
                {showMoreAction && (
                  <div className="dots-menu">
                    <div className="arrow-top"></div>
                    <div className="img-text-dots">
                      <Image src="ic_details.png" />
                      <span>Details</span>
                    </div>
                    <div className="img-text-dots">
                      <Image src="ic_menifes.png" />
                      <span>Copy Menifes</span>
                    </div>
                    <div className="img-text-dots">
                      <Image src="ic_reciving_logs.png" />
                      <span>Receiving Logs</span>
                    </div>
                    <div className="img-text-dots">
                      <Image src="ic_fixdots.png" />
                      <span>Fix DOTs</span>
                    </div>
                    <div className="img-text-dots">
                      <Image src="ic_print.png" />
                      <span>Print Options</span>
                    </div>
                    <div className="img-text-dots">
                      <Image src="ic_tracking_report.png" />
                      <span>Tracking Report</span>
                    </div>
                    <div className="img-text-dots">
                      <Image src="ic_resend_base.png" />
                      <span>ReSend to OnBase</span>
                    </div>
                    <div className="img-text-dots">
                      <Image src="ic_delete.png" />
                      <span>Delete</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="leftitem-container">
                <div className="left-text">Documents</div>
                <div className="left-textsmall">
                  What type of files are you uploading?
                  <span className="icon-info">
                    <div className="tool-tip">Tool tip Comes here</div>
                    <Image src="ic_info.png" />
                  </span>
                </div>
              </div>
            </div>
            <div className="grey-container row">
              {/* <Select
                className="col-5 gx-2"
                value={documentType}
                onChange={changeDocumentType}             
                {documentTypes.map((d) => (
                  <option value={d.value}>{d.label}</option>
                ))}
              /> */}
              
              <Field
                type="dropdown"
                placeholder="Manifest"              
                name={"documenttype"}
                width="col-5 gx-2"
               
              />
            
              <Field
                type="file"
                placeholder={"Select Document"}
                name={"documenttype"}
                width="col-5 gx-2"
                onChange={selectDocumentFile}
              />
              <input
                className="btn-upload col-2 mb-3"
                value="Upload"
                type="button"
                onClick={onSubmit}
              />

              <div className="instruction-text">Instructions</div>
              <div className="instruction-sub-text">{`You must select a file with these extensions: pdf,jpg,jpeg,png,gif`}</div>
              <div className="instruction-sub-text">{`After the file is selected, if you see a red dot, it means the file is not accepted. A green dot means the file is uploaded successfully.`}</div>
              <div className="instruction-sub-text">{`Any spaces, "&", "." or "+" characters in the file name will be replaced with an "_" character`}</div>
            </div>
            <div className="row tablefooter-container">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col-4">Document Name</th>
                    <th scope="col-2">Type</th>
                    <th scope="col-3">Upload Date</th>
                    <th scope="col-3">Actions</th>
                  </tr>
                </thead>
                <tbody>

                {!documentToUpload[0]&&<tr>
                      <td colSpan={4} style={{ textAlign: "center" }}>
                      No records to display
                    </td>
                    </tr>}
                  {documentToUpload.map((d) => (
                    <tr>
                      <td>{d.file?.name}</td>
                      <td>{d.documentType}</td>
                      <td>{d.upload_date}</td>
                      <td>
                        <div className="img-meni">
                          <Image src="ic_delete_meni.png" />
                          <Image src="ic_download_file.png" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="footer-text">Note</div>
            <div className="footer-subtext">
              if the file you have selected did not appear, your browser might
              have a pop up blocker. Please disable that.
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center g-0">
          <input
            className="btn-addworkorder-cancel"
            value="Cancel"
            type="button"
            onClick={onHide}
          />
          <input
            className="btn-addworkorder-add"
            value="Save Manifest"
            type="button"
            onClick={() => saveManifest()}
          />
        </div>
      </div>
    </>
  )
}

export default CreateManifest
