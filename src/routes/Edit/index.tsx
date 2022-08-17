import useEnhancer from "./enhancer"
import "./style.scss"
import Form from "shared/Form"

const EditUser = (props: any) => {
  let allProps = useEnhancer()
  let { editOnSubmit, user, allDropdownOpts, editUserConfig, editUser } =
    allProps

  return (
    <div className="container mx-auto m-5">
      <div className="d-flex justify-content-center subcontainer card">
        <Form
          config={editUserConfig}
          allDropdownOpts={allDropdownOpts}
          update={editUser}
          filters={user}
        />

        <div className="d-flex justify-content-centre mb-3 ">
          <button className="btn btn-outline-primary" onClick={editOnSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditUser
