import React, { FunctionComponent } from "react"
import { Routes as ReactRoute, Route } from "react-router-dom"
import ErrorBoundary from "shared/ErrorBoundaries"
import Workorder from "./WorkOrder"
import AddWorkorder from "./AddWorkorder"
import NotFound from "./NotFound"

const Routes: FunctionComponent = (props: any) => {
    return (
        <div>
            <ErrorBoundary>
                <ReactRoute>
                    <Route path="/workorder" element={<Workorder />} />
                    <Route path="/workorder/add" element={<AddWorkorder />} />
                    <Route path="*" element={<NotFound />} />
                </ReactRoute>
            </ErrorBoundary>
        </div>
    )
}

export default Routes
