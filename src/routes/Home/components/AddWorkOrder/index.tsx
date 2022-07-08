import "../style.scss"
import { FormattedMessage } from "react-intl"
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
      <div className="mb-3 custom-group col-6">
        <label htmlFor="disabledTextInput" className="label">
          <FormattedMessage id={`leftpanel.${name}`} />
        </label>
        <Select
          onChange={updateFilters(name)}
          placeholder="Select value"
          value={allDropdownOpts[name]?.find((d) => d.value == filters[name])}
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

function AddWorkOrder(props: any) {
  let {
    inactive,
    handleFilterCollapse,
    updateFilters,
    filters,
    allDropdownOpts,
    setCollapse,
    collapse,
    clearFilters,
    pageOpts,
  } = props

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
            className=" btn-reset"
            value={"Cancel"}
          />
          <input type="button" className=" btn-apply" value={"Add"} />
        </div>
      </>
    </div>
  )
}
export default AddWorkOrder
