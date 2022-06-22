const menuConfig = [
  {
    title: "menubar.dashboard",
    path: "/dashboard",
  },
  {
    title: "menubar.customer_processing",
    path: "/",
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
