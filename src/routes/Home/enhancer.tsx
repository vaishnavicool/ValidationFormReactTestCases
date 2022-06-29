import React, { useEffect, useState } from "react"
import { getPageOpts, getDropdownOpts } from "./config"
import { formattedDate } from "shared"
import api from "api"
import exportAsXls from "./excel"
import _ from "lodash"
import { toast } from "react-toastify"

const useEnhancer = () => {
  let pageKey = "workOrders"
  let pageOpts = getPageOpts(pageKey)
  let { defaultState } = pageOpts
  const [inactive, setInactive] = useState(true)
  const [tableData, setTableData] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [collapse, setCollapse] = useState(false)
  const [filters, setFilters] = useState(defaultState)
  const [defaultSortFieldId, setDefaultSortFieldId] = useState(1)
  const [allDropdownOpts, setAllDropdownOpts] = useState({})
  const [selectedData, setSelectedData] = useState([])
  const [show, setShow] = useState(false)

  const updateFilters = (name: string) => (evt: any) => {
    let filters2: any = { ...filters }
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
    setShow(false)
  }

  useEffect(() => {
    ;(async () => {
      let opts = await getDropdownOpts(pageKey)
      setAllDropdownOpts(opts)
    })()
  }, [])

  const handleFilterCollapse = () => {
    setInactive(!inactive)
  }

  const clearFilters = () => {
    setFilters({ ...defaultState })
  }

  const gettableData = async () => {
    Object.keys(filters).forEach((d) => {
      if (pageOpts.numerics[d]) {
        filters[d] = filters[d] - 0
      }
    })
    let data = await api[pageOpts.api_key]({
      loading_key: "tableData",
      ...filters,
    })

    let keepKeys = pageOpts.columns.map((d: any) => d.key)

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

  const download = () => {
    let headerKeys = {}
    pageOpts.columns.forEach((d: any) => {
      headerKeys[d.key] = d.name
    })
    if (selectedData[0])
      exportAsXls(pageOpts.pageTitle, selectedData, headerKeys)
    else toast("Please select some rows to download the report")
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
    gettableData,
    clearFilters,
    defaultSortFieldId,
    resetSort,
    allDropdownOpts,
    updateSelectedData,
    download,
    show,
    setShow
  }
}

export default useEnhancer
