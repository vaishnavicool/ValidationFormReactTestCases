import "../style.scss"

import DataTable from "react-data-table-component"
import Image from "shared/Image"
import Loading from "shared/Loading"
import Pagination from "./pagination"

function workOrder(props: any) {
  let {
    defaultSortFieldId,
    tableData,
    updateSelectedData,
    download,
    showActivity,
    setShowActivity,
    visibleColumns,
  } = props

  return (
    <div
      id="page-content-wrapper"
      className={`main-wrapper table-responsive col`}
    >
      <div className="right-panel">
        {/* <div className="detailbar row col-12">
          <div className="row">
            <div className="row col-auto me-auto">
              <Dropdown className="col-auto action-drop">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-action"
                  data-bs-offset="10,20"
                >
                  <FormattedMessage id="rightpanel.action" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="auto-width">
                  <Dropdown.Item href="#/action-1">
                    <FormattedMessage id="rightpanel.action_new_profile" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <FormattedMessage id="rightpanel.action_approvals" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <FormattedMessage id="rightpanel.action_need_recert" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="col-auto sort-button">
                <button
                  className="btn btn-light sort"
                  type="button"
                  onClick={resetSort}
                >
                  <Image
                    className="sort-icon"
                    src="sort-icon.png"
                    alt="sortIcon"
                  />
                  <FormattedMessage id="rightpanel.clear_sort" />
                </button>
              </div>
            </div>

            <div className="col-auto">
              <button
                className="btn btn-light mr-20 square-btn"
                type="button"
                onClick={() => download()}
              >
                <Image
                  className="download-icon"
                  src="icons-download.png"
                  alt="downloadIcon"
                />
              </button>
              <button
                className="btn btn-light square-refresh-btn"
                type="button"
              >
                <Image
                  className="refresh-icon"
                  src="icons-synchronize.png"
                  alt="downloadIcon"
                />
              </button>
            </div>
          </div>
        </div> */}
        <div className="table-section">
          <Loading id="tableData">
            {showActivity && (
              <div className="activity-div">
                <div className="activity-item" onClick={download}>
                  <Image src="exportToExcel.png" />
                  <span className="activity-txt">Export to Excel</span>
                </div>
              </div>
            )}
            <div>
              <DataTable
                columns={visibleColumns()}
                data={tableData}
                pagination
                paginationComponent={Pagination}
                fixedHeader
                selectableRows
                fixedHeaderScrollHeight="500px"
                defaultSortFieldId={defaultSortFieldId}
                onSelectedRowsChange={updateSelectedData}
              />             
            </div>

            {tableData?.length > 0 && (
              <div
                className="dot-img"
                onClick={() => setShowActivity(!showActivity)}
              >
                <Image src="dots.png" />
              </div>
            )}
          </Loading>
        </div>
      </div>
    </div>
  )
}
export default workOrder
