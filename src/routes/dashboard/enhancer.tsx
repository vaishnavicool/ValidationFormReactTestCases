import React, { useState, useEffect } from "react";
import axios from "axios";


const useEnhancer = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/user");
    setUser(result.data.reverse());
  };
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3004/user/${id}`);
    loadUsers();
  };

console.log(users, 'userenhancer');
  return{
   
    users,
    deleteUser
  }

  };
  export default useEnhancer;