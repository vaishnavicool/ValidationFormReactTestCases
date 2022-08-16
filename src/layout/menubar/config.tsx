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
        title: "menubar.addUsers",
        path: "/add_users",
      },  
      {
        title: "menubar.addUsers",
        path: "/add_users",
      },
      {
        title: "menubar.addUsers",
        path: "/add_users",
      },        
    ],
  },
 
  {
    title: "menubar.contact",
    path: "/contact",

  },
]

export default menuConfig
