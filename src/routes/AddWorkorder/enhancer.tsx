import { useState } from "react"
const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)

  return {
    showManifest,
    setShowManifest,
  }
}

export default useEnhancer
