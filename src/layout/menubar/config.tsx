const menuConfig = [
  {
    title: "menubar.dashboard",
    path: "/dashboard",
    icon: "ic_dashboard",
  },
  {
    title: "menubar.customer_processing",
    path: "/",
    icon: "ic_customer_processing",
    children: [
      {
        title: "menubar.customer_processing_profiles",
        path: "/profiles",
      },
      {
        title: "menubar.customer_processing_workOrders",
        path: "/work-orders",
      },

      {
        title: "menubar.customer_processing_jobs",
        path: "/jobs",
      },
      {
        title: "menubar.customer_processing_deliveryOrders",
        path: "/delivery-orders",
      },
      {
        title: "menubar.customer_processing_invoices",
        path: "/invoces",
      },
      {
        title: "menubar.customer_processing_packageInvoices",
        path: "/package-invoices",
      },
      {
        title: "menubar.customer_processing_approvalLetters",
        path: "/approval-letters",
      },
      {
        title: "menubar.customer_processing_recertLetters",
        path: "/recert-letters",
      },
      {
        title: "menubar.customer_processing_creditMemos",
        path: "/credit-memos",
      },
    ],
  },
  {
    title: "menubar.plant_processing",
    path: "/",
    icon: "ic_plant_processing",

    children: [
      {
        title: "One",
        path: "/one",
      },
      {
        title: "Two",
        path: "/two",
      },
      {
        title: "Three",
        path: "/three",
      },
    ],
  },
  {
    title: "menubar.compliance",
    path: "/",
    icon: "ic_compliance",
    children: [
      {
        title: "One",
        path: "/one",
      },
      {
        title: "Two",
        path: "/two",
      },
      {
        title: "Three",
        path: "/three",
      },
    ],
  },
  {
    title: "menubar.schedule",
    path: "/",
    icon: "ic_schedule",
    children: [
      {
        title: "One",
        path: "/one",
      },
      {
        title: "Two",
        path: "/two",
      },
      {
        title: "Three",
        path: "/three",
      },
    ],
  },
  {
    title: "menubar.reporting",
    path: "/",
    icon:"ic_reporting",
    children: [
      {
        title: "One",
        path: "/one",
      },
      {
        title: "Two",
        path: "/two",
      },
      {
        title: "Three",
        path: "/three",
      },
    ],
  },
  {
    title: "menubar.printing",
    path: "/",
    icon:"ic_printing",
    children: [
      {
        title: "One",
        path: "/one",
      },
      {
        title: "Two",
        path: "/two",
      },
      {
        title: "Three",
        path: "/three",
      },
    ],
  },
  {
    title: "menubar.manage",
    path: "/",
    icon:"ic_manage",
    children: [
      {
        title: "One",
        path: "/one",
      },
      {
        title: "Two",
        path: "/two",
      },
      {
        title: "Three",
        path: "/three",
      },
    ],
  },
]

export default menuConfig
