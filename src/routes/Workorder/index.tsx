import "./style.scss"
import FilterChipPanel from "./components/FilterChipPanel"
import Image from "shared/Image"
import ModalForm from "shared/ModalForm"
import TablePanel from "./components/TablePanel"
import Topsection from "shared/Topsection"
import { useDetectClickOutside } from "react-detect-click-outside"
import useEnhancer from "./enhancer"
import { useNavigate } from "react-router-dom"
import FilterPanel from "./components/FilterPanel"

function Workorder(props: any) {
  let extraProps = useEnhancer()
  let { showColumn, setShowColumn, switchVisibleColumns, columns,tableData } = extraProps
  let navigate = useNavigate()
  const columnsBtn = useDetectClickOutside({
    onTriggered: () => setShowColumn(false),
  })

  return (
    <>
      {tableData.length > 0 ? <><Topsection {...extraProps}>
        <div className="button-container">
          <input
            className="btn-addworkorder"
            value="+ Add Workorder"
            type="button"
            onClick={() => {
              navigate("add_work_order")
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
      <ModalForm {...extraProps} >
      <FilterPanel {...extraProps} />

      </ModalForm></>: <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'70vh' }}><Image src="NoRecordsFound.png" style={{ objectFit: 'contain',width:200}}/></div>}
    </>
  )
}
export default Workorder
