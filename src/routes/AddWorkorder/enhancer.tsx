import { useState } from "react"
const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)
  const [showMoreAction,setShowMoreAction] = useState(false)
  return {
    showManifest,
    setShowManifest,
    showMoreAction,
    setShowMoreAction
  }
}

export default useEnhancer
