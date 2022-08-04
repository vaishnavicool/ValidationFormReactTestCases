import useEnhancer from "./enhancer"
import { Link } from "react-router-dom"

const Dashboard = (props: any) => {
  let allProps = useEnhancer()
  let { users, deleteUser } = allProps

  console.log(users, "userindex")
  console.log(allProps, "allprops")

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow ">
          <thead className="thead-dark table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-secondary">
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>

                <td>{user["name"]}</td>
                <td>{user["username"]}</td>
                <td>{user["email"]}</td>
                <td>
                  <Link
                    className="btn btn-primary m-2"
                    to={`/routes/View/${user["id"]}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary m-2"
                    to={`/routes/Edit/${user["id"]}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger m-2"
                    onClick={() => deleteUser(user["id"])}
                    to=""
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
