import useEnhancer from "./enhancer"
import "./style.scss"

import { Link } from "react-router-dom"
const View = () => {
  let allProps = useEnhancer()
  let { user } = allProps
  let id = user.id
  return (
    <div className="container mx-auto m-5">
      <div className=" mx-auto shadow p-5 subContainer">
        <div className="row">
          <div className="col">
            {" "}
            <h5 className="">User Id: {id}</h5>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end mb-3 btnBox">
              <Link className="btn btn-outline-primary" to="/">
                Back
              </Link>
            </div>
          </div>
        </div>

        <ul className="list-group w-30">
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">User Name: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Website: {user["website"]}</li>
        </ul>
      </div>
    </div>
  )
}

export default View
