import "./style.scss"

import React from "react"
import Skeleton from "react-loading-skeleton"
import { useSelector } from "react-redux"

const Loading = ({
  id,
  children,
  height = 300,
 }: any) => {
  const status = useSelector((state: any) => state.loading[id])
 
  if (status === false) return children
 
  return (
    <div className="loader-parent" style={{ height }}>
      <div className="loader"></div>
    </div>
  )
}

export default Loading
