import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDocumentTitle } from "shared"
import { useIntl } from "react-intl"
import _ from "lodash"

const PageTitle = () => {
  let { pathname } = useLocation()
  let [title, setTitle] = useState()
  let { formatMessage } = useIntl()

  useDocumentTitle(title)
  useEffect(() => {
    let title = ""
    let path = ""
    path = _.last(pathname.split("/"))
    if (path != "") title = formatMessage({ id: `title.${path}` })

    setTitle(title)
  }, [pathname])

  return null
}
export default PageTitle
