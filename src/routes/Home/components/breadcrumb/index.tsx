import React, { Fragment } from "react"
import "./style.scss"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"
function TopSection(props: any) {
  let { setModalType, setShow, pageOpts } = props
  return (
    <Fragment>
      <div className="mainContainer">
        <div className="content">
          <FormattedMessage id="breadcrumb" />
        </div>
        <div className="button-container">
          <button className="btn btn-grp " type="reset">
            <Image src="icon-columns.png" className="btn-icon" /> Columns
            <div className="columns-div">
              {pageOpts.columns.map((d: any) => {
                return (
                  <>
                    {typeof(d.name) !== "object" && (
                      <div className="column-data">
                        <span>
                          <input type="checkbox" />
                        </span>
                        <span className="col-name">{d.name}</span>
                      </div>
                    )}
                  </>
                )
              })}
            </div>
          </button>
          <button className="btn btn-grp " type="reset">
            <Image src="icon-reload.png" className="btn-icon" /> Reload
          </button>

          <input
            className="btn-addworkorder"
            value="+ Add Workorder"
            type="button"
            onClick={() => {
              setModalType("add")
              setShow(true)
            }}
          />
        </div>
      </div>
    </Fragment>
  )
}
export default TopSection
