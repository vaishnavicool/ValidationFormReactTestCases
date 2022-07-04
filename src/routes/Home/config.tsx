import Image from "shared/Image"
import api from "api"
const pageOptions = {
  workOrders: {
    api_key: "p_workOrders",
    pageTitle: "Workorder",
    filters: {
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
      basic: [
        {
          name: "workOrderId",
          numeric: true,
          placeholder: "Enter workorder #",
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
          placeholder: "Enter generator #",
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
      ],
      advanced: [
        // { name: "navisionId" },
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
    },
    tableColumns: [
      { name: "Work Order", selector: "workorderID",visible:true},
      { name: "Generator", selector: "generatorName" ,visible:true},
      { name: "Manifest", selector: "manifestTrackingNumber",visible:true },
      { name: "Status", selector: "workorderStatus" ,visible:true},
      { name: "Type", selector: "workorderType",visible:true },
      { name: "Ready to Bill", selector: "ic_billed",visible:true },
      { name: "Invoiced", selector: "invoiced_yn",visible:true },
      { name: "Final Inv.", selector: "invoiced_final_yn",visible:true },
      { name: "Invoice", selector: "invoiceID",visible:true },
      { name: "CSR", selector: "internalCoordinatorNameLast" ,visible:true},
      { name: "CustomerName", selector: "customerName",visible:true },
      { name: "Order Date", selector: "orderDate", type: "date",visible:true },
      { name: "Job", selector: "jobName",visible:true },
      { name: "Sales Person", selector: "salesrepName",visible:true },
      { name: "Job Desc.", selector: "description",visible:true },
      { name: "Generator Name", selector: "generatorName",visible:true },
      {name:"h",selector:undefined,visible:true}
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
    name: d.name=== "h" ? <Image src="dots.png" className="dotImg" />: d.name,
    sortable: d.name=='h'? false:true,
    compact:d.name=='h'? true:false,
    key: d.selector,
    visible:d.visible,
    cell: (row: any) => {
      if (d.name==='h') return ""
      else if (!row[d.selector]) return "-"
      return row[d.selector]
    },
    width: d.name=='h' ? `15px`:`${Math.max(d.name.length * 10 + 20, 100)}px`,
    
  }))
  newPageOpts.api_key = pageOptions[pageKey].api_key
  newPageOpts.filters = pageOptions[pageKey].filters
  newPageOpts.pageTitle = pageOptions[pageKey].pageTitle

  pageOptions[pageKey].filters.basic.forEach((d) => {
    if (d.numeric) newPageOpts.numerics[d.name] = true
  })

  pageOptions[pageKey].filters.advanced.forEach((d) => {
    if (d.numeric) newPageOpts.numerics[d.name] = true
  })

  newPageOpts.defaultState = pageOptions[pageKey].filters.defaultState

  return newPageOpts
}

export const getDropdownOpts = async (pageKey) => {
  let dropdownOpts = {}

  let basic = pageOptions[pageKey].filters.basic.filter(
    (d) => d.type == "dropdown" && d.dropdownOpts.api_key
  )
  let advanced = pageOptions[pageKey].filters.advanced.filter(
    (d) => d.type == "dropdown" && d.dropdownOpts.api_key
  )

  let allOptsMeta = [...basic, ...advanced].map((d) => ({
    name: d.name,
    label: d.dropdownOpts.labelKey,
    value: d.dropdownOpts.valueKey,
  }))

  let allOpts = [...basic, ...advanced].map((d) =>
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

  pageOptions[pageKey].filters.basic.forEach((d) => {
    if (d.type == "dropdown" && !d.dropdownOpts.api_key)
      dropdownOpts[d.name] = d.dropdownOpts
  })

  pageOptions[pageKey].filters.advanced.forEach((d) => {
    if (d.type == "dropdown" && !d.dropdownOpts.api_key)
      dropdownOpts[d.name] = d.dropdownOpts
  })

  // Object.keys(dropdownOpts).forEach((d) => {
  //   dropdownOpts[d] = [...dropdownOpts[d]]
  // })

  return dropdownOpts
}
