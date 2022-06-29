import "../style.scss"

import { Collapse } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import Image from "shared/Image"
import Select from "react-select"
import classnames from "classnames"
import enhancer from "../../enhancer"

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
      <div className="mb-3 custom-group col-6">
        <label htmlFor="disabledTextInput" className="label">
          <FormattedMessage id={`leftpanel.${name}`} />
        </label>
        <Select
          onChange={updateFilters(name)}
          placeholder="Select value"
          value={allDropdownOpts[name]?.find((d) => {d.value == filters[name]})}
          className=" basic-single input"
          options={allDropdownOpts[name]}
          isLoading={!allDropdownOpts[name]?.[0]}
        />
      </div>
    )
  }

  return (
    <div className="mb-3 custom-group col-6">
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

function FilterPanel(props: any) {
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
    <div>
      <>
        <div className="filter-body">
          <div className="inputs row">
            {basic.map((d: any, index) => {
              return (
                <Field
                  key={index}
                  name={d.name}
                  {...{ updateFilters, filters, allDropdownOpts, ...d }}
                />
              )
            })}

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
        </div>
        <div className="button-container py-3">
          <input
            type="button"
            onClick={clearFilters}
            className=" btn-reset"
            value={"Reset"}
          />
          <input
            type="button"
            onClick={gettableData}
            className=" btn-apply"
            value={"Apply Filters"}
          />
         
        </div>
      </>
    </div>
  )
}
export default FilterPanel
