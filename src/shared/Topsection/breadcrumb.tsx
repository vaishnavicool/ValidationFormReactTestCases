import React from 'react'
import { FormattedMessage } from "react-intl"


const Breadcrumb = () => {

  return (
    <div>
      
        <div className="content">
          <FormattedMessage id="breadcrumb" />
        </div>
        <div className="content active">workorder /</div>
      <div className="content active">addworkorder</div>    
      
    </div>
  )
}

export default Breadcrumb
