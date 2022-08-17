import React, { FunctionComponent } from "react"
import { Routes as ReactRoute, Route } from "react-router-dom"
import ErrorBoundary from "shared/ErrorBoundaries"
import NotFound from "./NotFound"
import About from "./About"
import Dashboard from "routes/Dashboard"
import EditUser from "./Edit"
import View from "./View"

const Routes: FunctionComponent = (props: any) => {
  return (
    <div>
      <ErrorBoundary>
        <ReactRoute>
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/add" element={<EditUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/user/view/:id" element={<View />} />
        </ReactRoute>
      </ErrorBoundary>
    </div>
  )
}

export default Routes
