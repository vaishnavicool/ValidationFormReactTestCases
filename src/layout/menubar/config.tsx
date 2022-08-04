const menuConfig = [
  {
    title: "menubar.dashboard",
    path: "/",
    icon: "ic_dashboard",
  },
  {
    title: "menubar.about",
    path: "/about",
    icon: "ic_customer_processing",
  },
  {
    title: "menubar.user",
    path: "/plant-processing",
    icon: "ic_plant_processing",

    children: [
      {
        title: "menubar.add",
        path: "/inventory",
      },
      {
        title: "menubar.delete",
        path: "/manifests",
      },
      {
        title: "menubar.view",
        path: "/inbounds",
      },
      
    ],
  },
 
  {
    title: "menubar.contact",
    path: "/contact",
    icon: "ic_printing",
  },
  {
    title: "menubar.about",
    path: "/manage",
    icon: "ic_manage",
  },
]

export default menuConfig
