import "../style.scss"
import 'react-loading-skeleton/dist/skeleton.css'

import DataTable from "react-data-table-component"
import Image from "shared/Image"
import Loading from "shared/Loading"
import NoData from "./NoData"
import Pagination from "./pagination"
import { useDetectClickOutside } from "react-detect-click-outside"
import { FormattedMessage } from "react-intl"

function WorkOrder(props: any) {
  let {
    defaultSortFieldId,
    tableData,
    updateSelectedData,
    download,
    showActivity,
    setShowActivity,
    visibleColumns,
    noDataColumns
  } = props
  const activityMenuClick = useDetectClickOutside({
    onTriggered: () => setShowActivity(false),
  })
  
  return (
    <div
      id="page-content-wrapper"
      className={`main-wrapper table-responsive col`}
    >
      <div className="right-panel">
        <div className="table-section">
          <Loading id="tableData" component={true} columns={tableData.length ?  visibleColumns() : noDataColumns()}>
            {showActivity && (
              <div className="activity-div">
                <div className="activity-item" onClick={download}>
                  <Image src="exportToExcel.png" />
                  <span className="activity-txt"><FormattedMessage id="export_to_excel" /></span>
                </div>
              </div>
            )}
            <div>
              <DataTable
                columns={tableData.length ?  visibleColumns() : noDataColumns()}
                data={tableData}
                pagination
                paginationComponent={Pagination}
                fixedHeader
                selectableRows
                fixedHeaderScrollHeight="500px"
                defaultSortFieldId={defaultSortFieldId}
                onSelectedRowsChange={updateSelectedData}
                persistTableHead={true}
                noDataComponent={<NoData />}
              />
            </div>
            {tableData?.length > 0 && (
              <div
                ref={activityMenuClick}
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
export default WorkOrder
