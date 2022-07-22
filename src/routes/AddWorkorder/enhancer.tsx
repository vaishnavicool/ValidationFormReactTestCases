import { useEffect, useState } from "react"

const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)
  const [showMoreAction, setShowMoreAction] = useState(false)
  const [showNewGenerator, setShowNewGenerator] = useState(false)
  const [workOrder, setWorkOrder] = useState({})
  const [popup, setPopup] = useState("")
  const [allDropdownOpts] = useState({})
  const [show, setShow] = useState(false)
  const [aFilters, setAFilters] = useState({})

  const updateWorkOrder = (name: string) => (evt: any) => {
    let filters2: any = { ...workOrder }
    if (evt.label) filters2[name] = evt.value
    else {
      let { type, checked, value } = evt.target
      filters2[name] = type === "checkbox" ? checked : value
    }
    setWorkOrder(filters2)
  }

  const onHide = () => setPopup("")
  useEffect(() => {
    ;(async () => {
      // let opts = await getDropdownOpts(p pageKey)
      // setAllDropdownOpts(opts)
    })()
  }, [])

  const applyFilters = async () => {
    let filters2 = { ...workOrder }
    Object.keys(filters2).forEach((d) => {
      if (`${filters2[d]}`.trim() == "") delete filters2[d]
      let field = allDropdownOpts[d]?.find((d1: any) => d1.value == filters2[d])
      if (field?.label) filters2[d] = field.label
    })
    setShow(false)
    setAFilters(filters2)
  }

  const addWorkOrder = () => {
    console.log("Workorder Form Data",workOrder)
  }

  const handlers = { addGenerator: () => setPopup("generator") }

  return {
    showManifest,
    setShowManifest,
    showMoreAction,
    setShowMoreAction,
    showNewGenerator,
    setShowNewGenerator,
    updateWorkOrder,
    workOrder,
    popup,
    setPopup,
    onHide,
    handlers,
    show,
    setShow,
    aFilters,
    applyFilters,
    allDropdownOpts,
    addWorkOrder
  }
}

export default useEnhancer
