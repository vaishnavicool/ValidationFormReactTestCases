import { useState } from "react"
const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)
  const [showMoreAction,setShowMoreAction] = useState(false)

  const addGenerator = () => {
      console.log("Inside add generator")
  }

  return {
    showManifest,
    setShowManifest,
    showMoreAction,
    setShowMoreAction,
    addGenerator
  }
}

export default useEnhancer
