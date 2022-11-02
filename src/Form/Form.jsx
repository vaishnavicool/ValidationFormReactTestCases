import React, { useState } from "react";


const FormExampleForm = () => {
 
  const [form, setForm] = useState({
    email: "",
  });

  const [errMsg, setErrMsg] = useState( );


  const onSubmit = (e) => {
    const { email } = e.target;
 
    const emailCharFormat =
      /^[A-z0-9\u0000-\u007f\s'.,-/@#!$%^&*;:{}=\-_`~()]+$/;
    if (email?.value && !emailCharFormat.test(email.value)) {
      setErrMsg( "We don't allow any special characters in the customers email and ID.")
      
    }
    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    if (email?.value && !emailFormat.test(email.value)) {
      setErrMsg( "Please enter your email in this format: name@company.com.");
    }
    if( email?.value && emailCharFormat.test(email.value) && emailFormat.test(email.value)){
      setErrMsg ("Email is valid");
    }
    e.preventDefault();
    console.log(e, " even and state ", form);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="container-form">
        <div className="field">
          <label className="field-label" htmlFor="name">
            Email :{" "}
          </label>
          <input className="field-input" type="email" id="name" name="email" />
        </div>

        <input className="form-button" type="submit" value="Submit" data-testid="submitTestId" />
        <p data-testid="submitTestIdPara" > {errMsg}</p>
      </form>
    </>
  );
};

export default FormExampleForm;
