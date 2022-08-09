import useEnhancer from "./enhancer"
import "./style.scss"
import Form from "shared/Form"
import Field from "shared/Field"

const EditUser = (props: any) => {
  let allProps = useEnhancer()
  let { onInputChange, onSubmit, username, name, phone, email, website} =
    allProps

  return (
    <div className="container mx-auto m-5">
      <div className="d-flex justify-content-center subcontainer card">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="d-flex justify-content-end mb-3 margin-right-58px">
            <button className="btn btn-outline-primary">Update User</button>
          </div>
          <div className="grey-container row">
            <Field
              type="text"
              name={"name"}
              width="col-sm-12 mx-auto"
              className="form-control form-control-lg"
              value={name}
              placeholder={"Enter Your Name "}
              onChange={onInputChange}
            />

            <Field
              type="text"
              name={"username"}
              width="col-sm-12 mx-auto"
              className="form-control form-control-lg"
              value={name}
              placeholder={"Enter Your Username"}
              onChange={onInputChange}
            />

            <Field
              type="text"
              name={"email"}
              width="col-sm-12 mx-auto"
              className="form-control form-control-lg"
              value={name}
              placeholder={"Enter Your Email"}
              onChange={onInputChange}
            />

            <Field
              type="text"
              name={"phone"}
              width="col-sm-12 mx-auto"
              className="form-control form-control-lg"
              value={phone}
              placeholder={"Enter Your Phone"}
              onChange={onInputChange}
            />

            <Field
              type="text"
              name={"website"}
              width="col-sm-12 mx-auto"
              className="form-control form-control-lg"
              value={website}
              placeholder={"Enter Your Website"}
              onChange={onInputChange}
            />
{/* 
           <Form
            config={addGeneratorConfig}
            allDropdownOpts={allDropdownOpts}
            update={updateGenerator}
            filters={generator}
          /> */}
           
            <div>
              <div className="leftitem-container">
                <div className="left-text">Documents</div>
              </div>
            </div>

            <div className="grey-container row">
              <Field
                type="file"
                placeholder={"Select Document"}
                name={"document_type"}
                width="col-sm-12 mx-auto"
                className="form-control form-control-lg"
                onChange={onInputChange}
                // file={file}
              />
              <input
                className="btn-upload mb-3"
                value="Upload File"
                type="button"
                width="col-sm-12 mx-auto"
                // className="form-control form-control-lg"
                onClick={onSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser
