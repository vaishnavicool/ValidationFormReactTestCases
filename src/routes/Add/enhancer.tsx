import React, { useState } from "react";
import api from "api";

const useEnhancer = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    id:"",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.p_user(user);
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios.post("http://localhost:3004/user", user);
  // };

  return {
    user,
    onInputChange,
    onSubmit,
    username,name,phone,email,website 
  };
};
export default useEnhancer;
