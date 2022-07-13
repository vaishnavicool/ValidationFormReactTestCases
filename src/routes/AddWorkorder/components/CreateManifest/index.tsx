import React from 'react'
import { pageConfig } from 'routes/AddWorkorder/config'
import Form from 'shared/Form'
const CreateManifest = () => {
  return (
    <div>
       <Form config={pageConfig?.addManifestConfig} />
    </div>
  )
}

export default CreateManifest
