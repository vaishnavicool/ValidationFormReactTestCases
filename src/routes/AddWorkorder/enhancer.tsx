import { useState } from "react"
const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)
  const [showMoreAction,setShowMoreAction] = useState(false)
  const [showNewGenerator,setShowNewGenerator] = useState(false)

  const addGenerator = () => {
      console.log("Inside add generator")
      setShowNewGenerator(true)
  }


const hideGenerator = () => {
      console.log("Inside hide generator")
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
