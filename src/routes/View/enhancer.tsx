import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "api"

const useEnhancer = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
    id: "",
  })
  const { id } = useParams()
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    // const res = await axios.get(`http://localhost:3004/user/${id}`)
    const result = await api.g_user({ id })
    setUser(result)
  }

  return {
    user,
    setUser,
  }
}
export default useEnhancer
