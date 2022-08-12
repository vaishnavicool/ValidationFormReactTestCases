export const  editUserConfig= {
    form: [
      {
        name: "name",
        type:"text",
        width:"col-sm-12 mx-auto",
        className:"form-control form-control-lg",
        placeholder:"Enter Your Name ",
        // onChange:{onInputChange}
      },
      {
        name: "file",
        type:"file",
        width:"col-sm-12 mx-auto",
        className:"form-control form-control-lg",
        placeholder:"Enter Your Username ",
      },
      {
        name: "email",
        type:"text",
        width:"col-sm-12 mx-auto",
        className:"form-control form-control-lg",
        placeholder:"Enter Your Username ",
      },
      {
        name: "phone",
        type:"text",
        width:"col-sm-12 mx-auto",
        className:"form-control form-control-lg",
        placeholder:"Enter Your Username ",
      },
      {
        name: "website",
        type:"text",
        width:"col-sm-12 mx-auto",
        className:"form-control form-control-lg",
        placeholder:"Enter Your Username ",
      },

     {
        name: "country",
        width:"col-sm-12 mx-auto",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getCountry",
          labelKey: "countryName",
          valueKey: "countryID",
        },
      },
    ],
  }
