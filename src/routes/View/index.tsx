import useEnhancer from "./enhancer";

import { Link } from "react-router-dom";
const View = () => {

    let allProps = useEnhancer();
    let { user} = allProps;
    let id = user.id;
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user['website']}</li>
      </ul>
    </div>
  );
};

export default View;
