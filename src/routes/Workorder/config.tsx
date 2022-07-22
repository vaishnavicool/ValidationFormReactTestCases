export const pageOptions = {
  workOrders: {
    api_key: "p_workOrders",
    pageTitle: "Workorder",
    defaultState: {
      startDate: "2022-04-07",
      endDate: "2022-05-29",
      workOrderId: "",
      generatorId: "",
      customerId: "",
      salesrepId: "",
      icId: "",
      readyToBill: "",
      facilityId: "",
      jobId: "",

      searchType: 1,
      profileNumber: "0",
      dbLoginId: 804,
      returnMessage: "string",
    },
    form: [
      {
        name: "workOrderId",
        numeric: true,
      },
      {
        name: "jobId",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "p_getJobs",
          labelKey: "jobName",
          valueKey: "jobId",
          body: {
            isOutBoundOnly: true,
            searchValue: 0,
          },
        },
      },
      {
        name: "salesrepId",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "p_getSalesRep",
          labelKey: "name",
          valueKey: "salesRepid",
          body: {
            modeId: true,
          },
        },
      },
      {
        name: "generatorId",
        numeric: true,
      },
      {
        name: "customerId",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "p_getCustomers",
          labelKey: "customerName",
          valueKey: "customerId",
          body: {
            optionalParam: "string",
            isShowAll: true,
          },
        },
      },
      { name: "profileNumber" },
      { name: "startDate", type: "date" },
      { name: "endDate", type: "date" },
      {
        name: "readyToBill",
        numeric: true,
        type: "dropdown",
        dropdownOpts: [
          { label: "Yes", value: "0" },
          { label: "No", value: "1" },
        ],
      },
      {
        name: "icId",
        type: "dropdown",
        numeric: true,
        dropdownOpts: {
          api_key: "p_getCSR",
          labelKey: "name",
          valueKey: "id",
          body: {
            optionalParam: "1",
          },
        },
      },
      {
        name: "facilityId",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "p_getFacilities",
          labelKey: "name",
          valueKey: "id",
          body: {
            optionalParam: "0",
          },
        },
      },
    ],
    tableColumns: [
      { name: "Work Order", selector: "workorderID" },
      { name: "Generator", selector: "generatorName" },
      { name: "Manifest", selector: "manifestTrackingNumber" },
      { name: "Status", selector: "workorderStatus" },
      { name: "Type", selector: "workorderType" },
      { name: "Ready to Bill", selector: "ic_billed" },
      { name: "Invoiced", selector: "invoiced_yn" },
      { name: "Final Inv.", selector: "invoiced_final_yn" },
      { name: "Invoice", selector: "invoiceID" },
      { name: "CSR", selector: "internalCoordinatorNameLast" },
      { name: "CustomerName", selector: "customerName" },
      { name: "Order Date", selector: "orderDate", type: "date" },
      { name: "Job", selector: "jobName" },
      { name: "Sales Person", selector: "salesrepName" },
      { name: "Job Desc.", selector: "description" },
      { name: "Generator Name", selector: "generatorName" },
    ],
  },
}
