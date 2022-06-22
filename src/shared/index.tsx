import * as dfns from "date-fns"
import { createIntl, createIntlCache } from "react-intl"
import messages from "local/en.json"

const cache = createIntlCache()
const intl = createIntl({ locale: "en-US", messages }, cache)

export let formatMessage = (id: any) => {
  let msg = intl.formatMessage({ id, defaultMessage: "" })
  if (msg == id) return ""
  return msg
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
