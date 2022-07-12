import "./style.scss"
import FilterChipPanel from "./components/FilterChipPanel"
import Image from "shared/Image"
import ModalForm from "./components/ModalForm"
import TablePanel from "./components/TablePanel"
import Topsection from "shared/Topsection"
import { useDetectClickOutside } from "react-detect-click-outside"
import useEnhancer from "./enhancer"
import { useNavigate } from "react-router-dom"

function Workorder(props: any) {
  let extraProps = useEnhancer()
  let { showColumn, setShowColumn, switchVisibleColumns, columns } = extraProps
  let navigate = useNavigate()
  const columnsBtn = useDetectClickOutside({
    onTriggered: () => setShowColumn(false),
  })

  return (
    <>
      <Topsection {...extraProps}>
        <div className="button-container">
          <input
            className="btn-addworkorder"
            value="+ Add Workorder"
            type="button"
            onClick={() => {
              navigate("/workorder/add")
            }}
          />
        </div>
      </Topsection>
      <div className="filterchip-container">
        <FilterChipPanel {...extraProps} />
      </div>

      <div className="container-fluid p-0">
        <div className="profile-container pt-1 ">
          <div className="main-button-container">
            <div ref={columnsBtn}>
              <button
                className="btn btn-grp mr-3"
                type="reset"
                onClick={() => setShowColumn(!showColumn)}
              >
                <Image src="icon-columns.png" className="btn-icon" />{" "}
                <span className="btn-txt"> Columns</span>
              </button>
              {showColumn && (
                <div className="columns-div">
                  {columns.map((d: any, index) => {
                    return (
                      <div className="column-data" key={d.name}>
                        <span>
                          <input
                            type="checkbox"
                            checked={d.visible}
                            onChange={() => switchVisibleColumns(index)}
                          />
                        </span>
                        <span className="col-name">{d.name}</span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            <button className="btn btn-grp " type="reset">
              <Image src="icon-reload.png" className="btn-icon" />
              <span className="btn-txt"> Reload</span>
            </button>
          </div>
          <div className="table-container">
            <TablePanel {...extraProps} />
          </div>
        </div>
      </div>
      <ModalForm {...extraProps} />
    </>
  )
}
export default Workorder
