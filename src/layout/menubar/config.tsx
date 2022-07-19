const menuConfig = [
  {
    title: "menubar.dashboard",
    path: "/dashboard",
    icon: "ic_dashboard",
  },
  {
    title: "menubar.customer_processing",
    path: "/customer_processing",
    icon: "ic_customer_processing",
    children: [
      {
        title: "menubar.profiles",
        path: "/profiles",
      },
      {
        title: "menubar.work_orders",
        path: "customer_processing/work_order",
      },

      {
        title: "menubar.jobs",
        path: "/jobs",
      },
      {
        title: "menubar.delivery_Orders",
        path: "/delivery-orders",
      },
      {
        title: "menubar.invoices",
        path: "/invoces",
      },
      {
        title: "menubar.package_Invoices",
        path: "/package-invoices",
      },
      {
        title: "menubar.approval_Letters",
        path: "/approval-letters",
      },
      {
        title: "menubar.recert_Letters",
        path: "/recert-letters",
      },
      {
        title: "menubar.credit_memos",
        path: "/credit-memos",
      },
    ],
  },
  {
    title: "menubar.plant_processing",
    path: "/plant-processing",
    icon: "ic_plant_processing",

    children: [
      {
        title: "menubar.inventory",
        path: "/inventory",
      },
      {
        title: "menubar.manifests",
        path: "/manifests",
      },
      {
        title: "menubar.inbounds",
        path: "/inbounds",
      },
      {
        title: "menubar.bulk_samples",
        path: "/bulksamples",
      },
      {
        title: "menubar.outbounds",
        path: "/outbounds",
      },
      {
        title: "menubar.outbound_profiles",
        path: "/outboundprofiles",
      },
    ],
  },
  {
    title: "menubar.compliance",
    path: "/compliance",
    icon: "ic_compliance",
    children: [
      {
        title: "menubar.one",
        path: "/one",
      },
      {
        title: "menubar.two",
        path: "/two",
      },
      {
        title: "menubar.three",
        path: "/three",
      },
    ],
  },
  {
    title: "menubar.schedule",
    path: "/schedule",
    icon: "ic_schedule",
    children: [
      {
        title: "menubar.one",
        path: "/one",
      },
      {
        title: "menubar.two",
        path: "/two",
      },
      {
        title: "menubar.three",
        path: "/three",
      },
    ],
  },
  {
    title: "menubar.reporting",
    path: "/reporting",
    icon: "ic_reporting",
  },
  {
    title: "menubar.printing",
    path: "/printing",
    icon: "ic_printing",
  },
  {
    title: "menubar.manage",
    path: "/manage",
    icon: "ic_manage",
  },
]

export default menuConfig
