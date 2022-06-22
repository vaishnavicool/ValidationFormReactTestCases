import "../style.scss"

import DataTable from "react-data-table-component"
import { Dropdown } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"
import Loading from "shared/Loading"
import React from "react"

function workOrder(props: any) {
  let {
    defaultSortFieldId,
    resetSort,
    pageOpts,
    tableData,
    updateSelectedData,
    download,
    gettableData
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
                onClick={gettableData}
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
            <DataTable
              columns={pageOpts.columns}
              data={tableData}
              pagination
              fixedHeader
              selectableRows
              fixedHeaderScrollHeight="500px"
              defaultSortFieldId={defaultSortFieldId}
              onSelectedRowsChange={updateSelectedData}
            />
          </Loading>
        </div>
      </div>
    </div>
  )
}
export default workOrder
