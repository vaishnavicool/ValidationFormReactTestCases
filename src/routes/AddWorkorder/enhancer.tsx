import { useState } from "react"

import _ from "lodash"

const useEnhancer = () => {
  const [showManifest, setShowManifest] = useState(false)

  return {
    showManifest,
    setShowManifest,
  }
}

export default useEnhancer
