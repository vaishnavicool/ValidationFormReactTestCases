import { useState } from "react"
const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)
  const [showMoreAction,setShowMoreAction] = useState(false)
  const [showNewGenerator,setShowNewGenerator] = useState(false)

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
    hideGenerator
  }
}

export default useEnhancer
