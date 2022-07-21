import api from "api"
const pageOptions = {
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
    filters: [
      {
        name: "workOrder_Id",
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
        name: "sales_rep_Id",
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
        name: "generator_Id",
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

export const getPageOpts = (pageKey) => {
  let newPageOpts = {
    columns: [],
    api_key: 0,
    filters: {},
    defaultState: {},
    numerics: {},
    pageTitle: "",
  }

  newPageOpts.columns = pageOptions[pageKey].tableColumns.map((d) => ({
    name: d.name,
    sortable: true,
    compact: false,
    key: d.selector,
    visible: true,
    cell: (row: any) => {
      if (!row[d.selector]) return "-"
      return row[d.selector]
    },
    width: `${Math.min(d.name.length * 10 + 70, 200)}px`,
  }))
  newPageOpts.api_key = pageOptions[pageKey].api_key
  newPageOpts.filters = pageOptions[pageKey].filters
  newPageOpts.pageTitle = pageOptions[pageKey].pageTitle

  pageOptions[pageKey].filters.forEach((d) => {
    if (d.numeric) newPageOpts.numerics[d.name] = true
  })

  newPageOpts.defaultState = pageOptions[pageKey].defaultState

  return newPageOpts
}

export const getDropdownOpts = async (pageKey) => {
  let dropdownOpts = {}

  let basic = pageOptions[pageKey].filters.filter(
    (d) => d.type == "dropdown" && d.dropdownOpts.api_key
  )

  let allOptsMeta = [...basic].map((d) => ({
    name: d.name,
    label: d.dropdownOpts.labelKey,
    value: d.dropdownOpts.valueKey,
  }))

  let allOpts = [...basic].map((d) =>
    api[d.dropdownOpts.api_key]({
      loading_key: d.name,
      ...d.dropdownOpts.body,
    })
  )

  let optsRes = await Promise.all(allOpts)

  allOptsMeta.forEach((d, i) => {
    dropdownOpts[d.name] = optsRes[i]
      .map((d2) => ({
        label: d2[d.label],
        value: d2[d.value],
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
  })

  pageOptions[pageKey].filters.forEach((d) => {
    if (d.type == "dropdown" && !d.dropdownOpts.api_key)
      dropdownOpts[d.name] = d.dropdownOpts
  })
  return dropdownOpts
}
