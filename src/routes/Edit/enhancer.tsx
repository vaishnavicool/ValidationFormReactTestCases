import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import api from "api"

const useEnhancer = () => {
  //let history = useHistory();
  const { id } = useParams()
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    id: "",
  })

  const { name, username, email, phone, website } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadUser()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3004/user/${user.id}`, user)
    //  await api.put_user({id});
    //  history.push("/");
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/user/${id}`)
    // const result = await api.g_user({id});

    setUser(result.data)
  }

  return {
    user,
    onInputChange,
    onSubmit,
    username,
    name,
    email,
    phone,
    website,
    id,
  }
}
export default useEnhancer
