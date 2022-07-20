import { useState } from "react"
import WorkOrder from "routes/Workorder/components/TablePanel"
const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)
  const [showMoreAction,setShowMoreAction] = useState(false)
  const [showNewGenerator,setShowNewGenerator] = useState(false)
  const [workOrder, setWorkOrder] = useState({})

  const updateWorkOrder = (name: string) => (evt: any) => {
    let filters2: any = { ...workOrder }
    if (evt.label) filters2[name] = evt.value
    else {
      let { type, checked, value } = evt.target
      filters2[name] = type === "checkbox" ? checked : value
    }

    setWorkOrder(filters2)
  }

  const addGenerator = () => {
      setShowNewGenerator(true)
  }


const hideGenerator = () => {
      setShowNewGenerator(false)
  }

  return {
    showManifest,
    setShowManifest,
    showMoreAction,
    setShowMoreAction,
    addGenerator,
    showNewGenerator,
    setShowNewGenerator,
    hideGenerator,
    updateWorkOrder
  }
}

export default useEnhancer
