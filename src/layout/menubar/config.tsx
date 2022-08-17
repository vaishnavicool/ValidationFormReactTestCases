const menuConfig = [
  {
    title: "menubar.dashboard",
    path: "/",
  },
  {
    title: "menubar.about",
    path: "/about",
  },
  {
    title: "menubar.user",
    path: "/user",

    children: [
      {
        title: "menubar.add",
        path: "user/add",
      },  
      {
        title: "menubar.edit",
        path: "user/edit/:id",
      },
      {
        title: "menubar.view",
        path: "user/view/:id",
      }
    ]
  },
 
  {
    title: "menubar.contact",
    path: "/contact",

  },
  
]

export default menuConfig
