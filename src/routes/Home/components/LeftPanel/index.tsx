import "../style.scss"
import Image from "shared/Image"
import { FormattedMessage } from "react-intl"
import classnames from "classnames"
import { Collapse } from "react-bootstrap"
import Select from "react-select"

function Field(props: any) {
  const {
    name,
    placeholder,
    type = "text",
    updateFilters,
    filters,
    allDropdownOpts,
  } = props
  if (type == "dropdown") {
    return (
      <div className="mb-3 custom-group">
        <label htmlFor="disabledTextInput" className="label">
          <FormattedMessage id={`leftpanel.${name}`} />
        </label>
        <Select 
          onChange={updateFilters(name)}
          value={allDropdownOpts[name]?.find((d) => d.value == filters[name])}
          className=" basic-single input"
          options={allDropdownOpts[name]}
          isLoading={!allDropdownOpts[name]?.[0]}
        />
      </div>
    )
  }

  return (
    <div className="mb-3 custom-group">
      <label htmlFor="disabledTextInput" className="label">
        <FormattedMessage id={`leftpanel.${name}`} />
      </label>
      <input
        type={type}
        id="disabledTextInput"
        className="input"
        placeholder={placeholder}
        name={name}
        onChange={updateFilters(name)}
        value={filters[name]}
      />
    </div>
  )
}

function LeftPanel(props: any) {
  let {
    inactive,
    handleFilterCollapse,
    gettableData,
    updateFilters,
    filters,
    allDropdownOpts,
    setCollapse,
    collapse,
    clearFilters,
    pageOpts,
  } = props

  let { basic, advanced } = pageOpts.filters

  return (
    <div
      className={`filter-container p-0 ${
        inactive ? "active-state" : "inactive-state"
      }`}
    >
      <div className="filter-titlebar-wrapper">
        {inactive && (
          <>
            <div className="filter-title">
              <Image className="filter-icon" src="filter-icon.png" />
              <FormattedMessage id="leftpanel.filter" />
            </div>
            <button
              className="btn btn-clear-all btn-success"
              onClick={clearFilters}
            >
              <Image className="clear-filter-icon" src="clear-filters.png" />
              <FormattedMessage id="leftpanel.clearall" />
            </button>
          </>
        )}
        <div className="" onClick={() => handleFilterCollapse()}>
          <Image
            className={classnames("arrow-icon", { invert: !inactive })}
            src="Drawer_Symbol.svg"
          />
        </div>
      </div>
      {inactive && (
        <>
          <div className="filter-body">
            <div className="inputs">
              {basic.map((d: any, index) => {
                return (
                  <Field
                    key={index}
                    name={d.name}
                    {...{ updateFilters, filters, allDropdownOpts, ...d }}
                  />
                )
              })}

              <button
                className={`btn btn-success ${
                  collapse ? "advanced-dropdown" : "advanced-dropdown-complete"
                } `}
                onClick={() => setCollapse(!collapse)}
              >
                <FormattedMessage id="leftpanel.advanced search" />
                <Image
                  className={classnames("down-arrow-icon", {
                    invertDown: collapse,
                  })}
                  src="bottom.png"
                />
              </button>

              <Collapse in={collapse}>
                <div className="ml-2">
                  {advanced.map((d: any, index) => {
                    return (
                      <Field
                        key={d.name}
                        name={d.name}
                        {...{ updateFilters, filters, allDropdownOpts, ...d }}
                      />
                    )
                  })}
                </div>
              </Collapse>
            </div>
          </div>
          <div className="text-center py-3">
            <button
              type="button"
              onClick={gettableData}
              className="btn btn-light btn-search"
            >
              <Image className="icon-search" src="search-icon.png" />
              <FormattedMessage id="leftpanel.btn_search" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
export default LeftPanel
