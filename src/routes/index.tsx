import React, { FunctionComponent } from "react"
import { Routes as ReactRoute, Route } from "react-router-dom"
import ErrorBoundary from "shared/ErrorBoundaries"
import Workorder from "./Workorder"
import AddWorkorder from "./AddWorkorder"
import NotFound from "./NotFound"

const Routes: FunctionComponent = (props: any) => {
    return (
        <div>
            <ErrorBoundary>
                <ReactRoute>
                    <Route path="customer_processing/workorder" element={<Workorder />} />
                    <Route path="customer_processing/workorder/addworkorder" element={<AddWorkorder />} />
                    <Route path="*" element={<NotFound />} />
                </ReactRoute>
            </ErrorBoundary>
        </div>
    )
}

export default Routes
