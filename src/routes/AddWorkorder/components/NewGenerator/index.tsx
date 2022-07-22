import "./style.scss"

import Form from "shared/Form"
import Image from "shared/Image"
import { pageConfig } from "routes/AddWorkorder/config"

const NewGenerator = (props) => {
  let { onHide, setPopup } = props

  return (
    <>
      <div className="d-flex col-12">
        <div className="col-6 left-section-gen p-3 ">
          <Form
            config={pageConfig?.addNewGeneratorConfig}
            update={() => {}}
            allDropdownOpts={() => ["a", "b"]}
          />
        </div>
        <div className="col-6 gen-right-section">
          <div className="right-head">Mailing Information</div>
          <div className="gen-right-container">
            <div className="datails-text">Details Comes here</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center g-0 position-relative">
        <button
          className=" btn-back-to-manifest-panel"
          onClick={() => setPopup("manifest")}
          type="button"
        >
          <Image src="ic_arrow_back.png" />
          Back to manifest
        </button>
        <input
          className="btn-addworkorder-cancel"
          value="Cancel"
          type="button"
          onClick={onHide}
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

export default NewGenerator
