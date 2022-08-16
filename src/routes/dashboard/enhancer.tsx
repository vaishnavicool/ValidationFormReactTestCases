import React, { useState, useEffect } from "react"
import axios from "axios"
import api from "api"

const useEnhancer = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await api.g_users({loading_key:'users'});
    setUser(result.reverse())
    console.log(result, 'result');
      
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3004/user/${id}`)
    loadUsers()
  }

  console.log(users, "userenhancer")
  return {
    users,
    deleteUser,
  }
}
export default useEnhancer
