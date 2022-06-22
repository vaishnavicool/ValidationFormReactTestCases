import React, { FunctionComponent } from "react"
import { Routes as ReactRoute, Route } from "react-router-dom"
import ErrorBoundary from "shared/ErrorBoundaries"
import Home from "./Home"
import NotFound from "./NotFound"

const Routes: FunctionComponent = (props: any) => {
    return (
        <div>
            <ErrorBoundary>
                <ReactRoute>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </ReactRoute>
            </ErrorBoundary>
        </div>
    )
}

export default Routes
