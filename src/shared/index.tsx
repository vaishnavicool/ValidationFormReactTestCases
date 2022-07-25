import * as dfns from "date-fns"
import { createIntl, createIntlCache } from "react-intl"
import messages from "local/en.json"
import api from "api"

const cache = createIntlCache()
const intl = createIntl({ locale: "en-US", messages }, cache)

export let formatMessage = (id: any) => {
  let msg = intl.formatMessage({ id, defaultMessage: "" })
  if (msg == id) return ""
  return msg
}
export const getPageOpts = (pageOptions, pageKey) => {
  let newPageOpts = {
    columns: [],
    api_key: 0,
    form: {},
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
  newPageOpts.form = pageOptions[pageKey].form
  newPageOpts.pageTitle = pageOptions[pageKey].pageTitle

  pageOptions[pageKey].form.forEach((d) => {
    if (d.numeric) newPageOpts.numerics[d.name] = true
  })

  newPageOpts.defaultState = pageOptions[pageKey].defaultState

  return newPageOpts
}

export const getDropdownOpts = async (pageOptions, pageKey) => {
  let dropdownOpts = {}

  let basic = pageOptions[pageKey].form.filter(
    (d) => d.type == "dropdown" && d?.dropdownOpts?.api_key
  )

  let allOptsMeta = [...basic].map((d) => ({
    name: d.name,
    label: d.dropdownOpts.labelKey,
    value: d.dropdownOpts.valueKey,
  }))

  let allOpts = [...basic].map((d) =>
{console.log(d)

    return api[d.dropdownOpts.api_key]({
      loading_key: d.name,
      ...d.dropdownOpts.body,
    })}
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

  pageOptions[pageKey].form.forEach((d) => {
    if (d.type == "dropdown" && !d.dropdownOpts.api_key)
      dropdownOpts[d.name] = d.dropdownOpts
  })
  return dropdownOpts
}

export const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export let formattedDate = (dt, showYr = true) => {
  const date = new Date(dt)
  return dfns.format(date, showYr ? "MMM dd, yyyy" : "MMM dd")
}

export let dateForApi = (date) => dfns.format(date, "yyyy-MM-dd")
