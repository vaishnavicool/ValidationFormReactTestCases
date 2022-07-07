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
            className="basic-single input"
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
  export default Field
