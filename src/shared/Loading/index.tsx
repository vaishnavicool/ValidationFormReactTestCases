import "./style.scss"

import React from "react"
import Skeleton from "react-loading-skeleton"
import { useSelector } from "react-redux"

const Loading = ({
  id,
  children,
  height = 300,
  component = false,
  columns,
}: any) => {
  const status = useSelector((state: any) => state.loading[id])
  columns = columns.slice(0, 8)
  const n = 10;
  if (!status) return children
  if (component)
    return (
      <table className="table skeleton-table">
        <thead>
          <tr>
            {columns.map((element,index) => (
              <th key={index}>{element.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {[...Array(n)].map((e, i) => <tr key={i}>
            {columns.map((element,index) => (
              <td key={index}>
                <Skeleton
                  height={13}
                  baseColor={"#e6e6e6"}
                  width="-webkit-fill-available"
                  style={{ margin: 10, width: " -webkit-fill-available" }}
                />
              </td>
            ))}
          </tr>)}          
        </tbody>
      </table>
    )
  return (
    <div className="loader-parent" style={{ height }}>
      <div className="loader"></div>
    </div>
  )
}

export default Loading
