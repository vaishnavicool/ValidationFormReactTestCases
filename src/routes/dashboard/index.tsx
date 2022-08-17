import useEnhancer from "./enhancer"
import { Link } from "react-router-dom"
import Loading from "shared/Loading"


const Dashboard = (props: any) => {
  let allProps = useEnhancer()
  let { users, deleteUser } = allProps
  return (
    <div className="container">
      <div className="py-4">
      
        <Loading id="users">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>

                  <td>{user["name"]}</td>
                  <td>{user["username"]}</td>
                  <td>{user["email"]}</td>
                  <td>
                    <Link
                      className="btn btn-outline-primary m-2"
                      to={`/user/view/${user["id"]}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary m-2"
                      to={`/user/edit/${user["id"]}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-outline-primary m-2"
                      to={`/user/add`}
                    >
                      Add
                    </Link>
                    <button
                      className="btn btn-outline-primary m-2"
                      onClick={() => deleteUser(user["id"])}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Loading>
      </div>
    </div>
  )
}

export default Dashboard
