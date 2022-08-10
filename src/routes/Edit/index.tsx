import useEnhancer from "./enhancer"
import "./style.scss"
import Form from "shared/Form"
import Field from "shared/Field"

const EditUser = (props: any) => {
  let allProps = useEnhancer()
  let {
    onInputChange,
    onSubmit,
    username,
    name,
    phone,
    email,
    website,
    user,
    allDropdownOpts,
    editUserConfig,
    editUser,
  } = allProps

  console.log(allDropdownOpts, "33333333333333333333333333555555555555555555555555555555777777777");
  

  return (
    <div className="container mx-auto m-5">
      <div className="d-flex justify-content-center subcontainer card">
      
      <Form
            config={editUserConfig}
            allDropdownOpts={allDropdownOpts}
             update={editUser}
            filters={user}
          />
         

           
        
          <div className="d-flex justify-content-end mb-3 margin-right-58px">
            <button className="btn btn-outline-primary">Update User</button>
          </div>
      
      </div>
    </div>
  )
}

export default EditUser
