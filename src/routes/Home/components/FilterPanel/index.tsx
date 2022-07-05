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
  let value = ""
  if (type == "dropdown") {
    value = allDropdownOpts[name]?.find((d) => d.value == filters[name])
    if (!value) value = ""
    return (
      <div className="mb-3 custom-group col-6">
        <label htmlFor="disabledTextInput" className="label">
          <FormattedMessage id={`leftpanel.${name}`} />
        </label>
        <Select
          onChange={updateFilters(name)}
          placeholder="Select value"
          value={value}
          className=" basic-single input"
          options={allDropdownOpts[name]}
          isLoading={!allDropdownOpts[name]?.[0]}
        />
      </div>
    )
  }

  value = filters[name]
  if (!value) value = ""
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
        value={value}
      />
    </div>
  )
}

function FilterPanel(props: any) {
  let {
    inactive,
    handleFilterCollapse,
    updateFilters,
    filters,
    allDropdownOpts,
    setCollapse,
    collapse,
    clearFilters,
    pageConfig,
    modalType,
    pageOpts,
  } = props

  let dataConfig = pageConfig[modalType]
  return (
    <div>
      <>
        <div className="filter-body">
          <div className="inputs row">
            {pageOpts.filters.map((d: any, index) => {
              return (
                <Field
                  key={index}
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
            onClick={dataConfig?.cancelAction}
            className=" btn-reset"
            value={dataConfig?.cancelButtonTitle}
          />
          <input
            type="button"
            onClick={dataConfig?.submitAction}
            className=" btn-apply"
            value={dataConfig?.submitButtonTitle}
          />
        </div>
      </>
    </div>
  )
}
export default FilterPanel
