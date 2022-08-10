import React, { useState, useEffect } from "react"
import axios from "axios"
import { editUserConfig } from "./config"
import { useParams } from "react-router-dom"
import { getDropdownOpts } from "shared"
// import api from "api"

const useEnhancer = () => {

 
  const [generator, setGenerator] = useState({})
  const [allDropdownOpts, setAllDropdownOpts] = useState({})

  const editUser = (name: string) => (evt: any) => {
    let filters2: any = { ...generator }
    if (evt.label) filters2[name] = evt.value
    else {
      let { type, checked, value } = evt.target
      filters2[name] = type === "checkbox" ? checked : value
    }
    setGenerator(filters2)
  }

  useEffect(() => {
    ;(async () => {
      let generatorOpts = await getDropdownOpts(editUserConfig)
      setAllDropdownOpts(generatorOpts)
    })()
  }, [])

































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

  const { name, username, email, phone, website} = user
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
    editUser,
    allDropdownOpts,
    editUserConfig,
   
  }
}
export default useEnhancer
