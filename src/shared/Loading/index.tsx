import React from "react"
import { useSelector } from "react-redux"
import "./style.scss"

const Loading = ({ id, children, height = 300 }: any) => {
  const status = useSelector((state: any) => state.loading[id])
  if (!status) return children
  return (
    <div className="loader-parent" style={{ height }}>
      <div className="loader"></div>
    </div>
  )
}

export default Loading
