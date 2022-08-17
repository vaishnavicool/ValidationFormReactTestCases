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
        title: "menubar.addUser",
        path: "/add",
      },  
      {
        title: "menubar.editUser",
        path: "/edit/:id",
      },
      {
        title: "menubar.viewUser",
        path: "/view/:id",
      },    
      {
        title: "menubar.deleteUser",
        path: "/add_users",
      },      
    ]
  },
 
  {
    title: "menubar.contact",
    path: "/contact",

  },
  
]

export default menuConfig
