import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

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
    const res = await axios.get(`http://localhost:3004/user/${id}`)
    setUser(res.data)
  }

  return {
    user,
    setUser,
  }
}
export default useEnhancer
