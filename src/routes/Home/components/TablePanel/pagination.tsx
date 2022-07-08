import classnames from "classnames"
import "../style.scss"

const Pagination = ({
  rowsPerPage,
  rowCount: total,
  onChangePage,
  onChangeRowsPerPage,
  currentPage: pageNo,
  paginationRowsPerPageOptions = [],  
}) => {

  const onChangeRowsPerPageT = ({ target }) =>
    onChangeRowsPerPage(Number(target.value))
  const handleFirstPageButtonClick = () => {
    onChangePage(1)
  }

  const handleBackButtonClick = () => {
    onChangePage(pageNo - 1)
  }

  const handleNextButtonClick = () => {
    onChangePage(pageNo + 1)
  }

  let lastPage = Math.ceil(total / rowsPerPage)

  let hasPreviousPage = pageNo == 1
  let hasNextPage = pageNo == lastPage

  let toSize = pageNo * rowsPerPage
  if (toSize > total) toSize = total

    let maxPages = 5

    let startPage, endPage
    if (lastPage <= maxPages) {
      startPage = 1
      endPage = lastPage
    } else {
      let maxPagesBeforepageNo = Math.floor(maxPages / 2)
      let maxPagesAfterpageNo = Math.ceil(maxPages / 2) - 1
      if (pageNo <= maxPagesBeforepageNo) {
        startPage = 1
        endPage = maxPages
      } else if (pageNo + maxPagesAfterpageNo >= lastPage) {
        startPage = lastPage - maxPages + 1
        endPage = lastPage
      } else {
        startPage = pageNo - maxPagesBeforepageNo
        endPage = pageNo + maxPagesAfterpageNo
      }
    }
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    )

  return (
    <div className={"row justify-content-between mt-3 mx-5"}>
      <div className={`float-left col-4 entries-txt`}>
        {`Showing ${
          (pageNo - 1) * rowsPerPage + 1
        }  to ${toSize}  of ${total} entries`}
      </div>
      <div className="col-4">
       <span className="drop-down-text">Show</span>      
        <select 
        className="drop-down-margin
        vv"
        onClick={onChangeRowsPerPageT}>
          {paginationRowsPerPageOptions.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
        <span className="drop-down-text">entries</span>       
      </div>
      {total >= rowsPerPage + 1 && (
        <div className="float-right col-4">
          <ul className="pagination justify-content-end align-items-center">
            <li
              onClick={handleFirstPageButtonClick}
              className={classnames("page-item", {
                disabled: hasPreviousPage,
              })}
            >
              <span className="">First</span>
            </li>
            <li
              onClick={handleBackButtonClick}
              className={classnames("page-item ", {
                disabled: hasPreviousPage,
              })}
            >
              <span className="mx-3">Previous</span>
            </li>
            {pages.map((d) => (
              <li
                key={d}
                onClick={handleNextButtonClick}
                className={classnames("pagination-active", { active: d == pageNo })}
              >
                <a className="pagination-link"> {d} </a>
              </li>
            ))}
            <li
              onClick={handleNextButtonClick}
              className={classnames("page-item", { disabled: hasNextPage })}
            >
               <span className="mx-3">Next</span>
            </li>

            <li 
            
            className={classnames("page-item", { disabled: hasNextPage })}>
              <span className="">Last</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
export default Pagination
