import "./style.scss"

import FilterChipPanel from "./components/FilterChipPanel"
import Image from "shared/Image"
import ModalForm from "./components/ModalForm"
import TablePanel from "./components/TablePanel"
import TopSection from "./components/breadcrumb/index"
import useEnhancer from "./enhancer"

function Dashboard(props: any) {
  let extraProps = useEnhancer()
  let { showColumn, setShowColumn, handleChange, pageOpts } = extraProps
  return (
    <>
      <TopSection {...extraProps} />
      <div className="filterchip-container">
        <FilterChipPanel {...extraProps} />
      </div>

      <div className="container-fluid p-0">
        <div className="profile-container pt-1 ">
          <div className="main-button-container">
            <button
              className="btn btn-grp  mx-4"
              type="reset"
              onClick={() => setShowColumn(!showColumn)}
            >
              <Image src="icon-columns.png" className="btn-icon" /> Columns
            </button>
            {showColumn && (
              <div className="columns-div">
                {pageOpts.columns.map((d: any) => {
                  return (
                    <>
                      {typeof d.name !== "object" && (
                        <div className="column-data">
                          <span>
                            <input
                              type="checkbox"
                              checked={d.visible}
                              onChange={() => handleChange(d)}
                            />
                          </span>
                          <span className="col-name">{d.name}</span>
                        </div>
                      )}
                    </>
                  )
                })}
              </div>
            )}
            <button className="btn btn-grp " type="reset">
              <Image src="icon-reload.png" className="btn-icon" /> Reload
            </button>
          </div>
          <div className="table-container">
            {/* <LeftPanel {...extraProps} /> */}
            <TablePanel {...extraProps} />
          </div>
        </div>
      </div>
      <ModalForm {...extraProps} />
    </>
  )
}
export default Dashboard
