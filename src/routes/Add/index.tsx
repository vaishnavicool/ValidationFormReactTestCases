import useEnhancer from "./enhancer"
import "./style.scss"

const AddUser = () => {
  let allProps = useEnhancer()
  let { onInputChange, username, name, phone, email, website } = allProps

  return (
    <div className="container mx-auto m-5 ">
      <div className="w-75 mx-auto shadow p-5 subContainer">
        <div className="d-flex justify-content-end mb-3 margin-right-58px">
          <button className="btn btn-outline-primary">Add User</button>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
            Name:
          </label>
          <div className="col-sm-10 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
            Username:
          </label>
          <div className="col-sm-10 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
            Email:
          </label>
          <div className="col-sm-10 mx-auto">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
            Phone:
          </label>
          <div className="col-sm-10 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
            Website:
          </label>
          <div className="col-sm-10 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddUser
