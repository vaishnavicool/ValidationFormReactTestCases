import { useEffect, useState } from "react"
import { getDropdownOpts, getPageOpts } from "./config"

import _ from "lodash"
import api from "api"
import exportAsXls from "./excel"
import { formattedDate } from "shared"
import { toast } from "react-toastify"

const useEnhancer = () => {
  let pageKey = "workOrders"
  let pageOpts: any = getPageOpts(pageKey)
  let { defaultState } = pageOpts
  const [inactive, setInactive] = useState(true)
  const [tableData, setTableData] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [collapse, setCollapse] = useState(false)
  const [filters, setFilters] = useState({})
  const [aFilters, setAFilters] = useState({})
  const [allDropdownOpts, setAllDropdownOpts] = useState({})
  const [selectedData, setSelectedData] = useState([])
  const [show, setShow] = useState(false)
  const [showActivity, setShowActivity] = useState(false)
  const [showColumn, setShowColumn] = useState(false)
  const [columns, setColumns] = useState([...pageOpts.columns])
  const [modalType, setModalType] = useState()

  const updateFilters = (name: string) => (evt: any) => {
    let filters2: any = { ...filters }
    console.log("filters2 name",filters2[name],evt.label)
    if (evt.label) filters2[name] = evt.value
    else {
      let { type, checked, value } = evt.target
      filters2[name] = type === "checkbox" ? checked : value
    }

    setFilters(filters2)
  }

  const resetSort = () => {
    let element = document.getElementsByClassName("rdt_TableCol_Sortable")[0]
    if (element instanceof HTMLElement) {
      element.click()
    }
  }

  useEffect(() => {
    ;(async () => {
      let opts = await getDropdownOpts(pageKey)
      setAllDropdownOpts(opts)
      updateTable({})
    })()
  }, [])

  const handleFilterCollapse = () => {
    setInactive(!inactive)
  }
  const clearFilters = () => {
    setFilters({})
    setAFilters({})
    updateTable({})
  }
  const resetFilterPanel = () => {
    setFilters({})
  }

  const switchVisibleColumns = async (index: any) => {
    let vColumns = [...columns]
    vColumns[index].visible = !vColumns[index].visible
    setColumns(vColumns)
  }

  const visibleColumns = () => {
    let vColumns = columns.filter((d) => d.visible)
    if (vColumns[0]) return vColumns
    else return columns
  }

  const applyFilters = async () => {
    let filters2 = { ...filters }
    Object.keys(filters2).forEach((d) => {
      if (`${filters2[d]}`.trim() == "") delete filters2[d]
      let field= allDropdownOpts[d]?.find((d1: any) => d1.value == filters2[d])
      if(field?.label)
      filters2[d]=field.label
     
      
    })
    setShow(false)
    setAFilters(filters2)
    updateTable(filters2)
  }

  const removeAFilter = async (key) => {
    let filters2 = { ...aFilters }
    delete filters2[key]
    setAFilters(filters2)
    setFilters(filters2)
    updateTable(filters2)
  }

  const updateTable = async (filters) => {
    let nfilters = { ...defaultState, ...filters }
    Object.keys(nfilters).forEach((d) => {
      if (pageOpts.numerics[d]) {
        nfilters[d] = nfilters[d] - 0
      }
    })

    let data = await api[pageOpts.api_key]({
      loading_key: "tableData",
      ...nfilters,
    })

    let keepKeys = columns.map((d: any) => d.key)

    if (data[0]) {
      data.forEach((d1, i1) => {
        Object.keys(d1).forEach((d2, i2) => {
          if (d2.toLocaleLowerCase().includes("date"))
            data[i1][d2] = formattedDate(data[i1][d2])
        })
        data[i1] = _.pick(data[i1], keepKeys)
      })
      setTableData(data)
      setShow(false)
    }
  }

  const updateSelectedData = (eve) => {
    setSelectedData(eve.selectedRows)
  }
  let pageConfig = {
    filter: {
      submitButtonTitle: "Apply Filters",
      title: "Add Filters",
      submitAction: applyFilters,
      cancelButtonTitle: "Reset",
      cancelAction: resetFilterPanel,
    },
    add: {
      submitButtonTitle: "Add",
      title: "Add WorkOrder",
      submitAction: "",
      cancelButtonTitle: "Cancel",
      cancelAction: "cancelAdd",
    },
  }

  const download = () => {
    let headerKeys = {}
    columns.forEach((d: any) => {
      if (d.visible) headerKeys[d.key] = d.name
    })
    if (selectedData[0])
      exportAsXls(pageOpts.pageTitle, selectedData, headerKeys)
    else toast("Please select some rows to download the report")
    setShowActivity(false)
  }

  return {
    tableData,
    inactive,
    pageOpts,
    handleFilterCollapse,
    updateFilters,
    filters,
    setStartDate,
    startDate,
    collapse,
    setCollapse,
    clearFilters,
    resetSort,
    allDropdownOpts,
    updateSelectedData,
    download,
    show,
    setShow,
    modalType,
    setModalType,
    pageConfig,
    showActivity,
    setShowActivity,
    setShowColumn,
    showColumn,
    switchVisibleColumns,
    columns,
    visibleColumns,
    removeAFilter,
    aFilters,
  }
}

export default useEnhancer
