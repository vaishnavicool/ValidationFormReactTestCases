import "./style.scss"

import { FormattedMessage, useIntl } from "react-intl"

import Select from "react-select"
import Image from "shared/Image"
function Field(props: any) {
  const {
    name,
    type = "text",
    updateFilters=()=>{},
    filters={},
    allDropdownOpts={name:['a','b']},
    width = "col-6",
    infoKey,
    placeholder,
    actionIcon,
    actionHandler
  } = props
  let intl = useIntl()
  let labelKey= `form.${name}`
  let aName = intl.formatMessage({
    defaultMessage: labelKey,
    id: labelKey,
  })
  let value = ""
  if(actionIcon && actionHandler){
    return (
      <div className={`mb-3  ${width}`}>
            <Image src="ic_add.png" />
          </div>
    )
  }
  if (type == "dropdown" && allDropdownOpts) {
    value = allDropdownOpts[name]?.find((d: any) => d.value == filters[name])
    if (!value) value = ""
    return (
      <div className={`mb-3 custom-group ${width}`}>
        <label htmlFor="disabledTextInput" className="label">
          <FormattedMessage id={labelKey} />
        </label>
        <Select
          onChange={updateFilters(name)}
          placeholder={`${placeholder ? `${placeholder}`: `Select ${aName}`}`}
          value={value}
          isSearchable={true}
          className="basic-single"
          options={allDropdownOpts[name]}
          // isLoading={!allDropdownOpts[name]?.[0]}
        />
      </div>
    )
  }
  if (filters) value = filters[name]
  if (!value) value = ""

  if (type == "checkbox") {
    return (
      <div className={`mb-3 custom-group ${width} checkbox-container`}>
      <label htmlFor="disabledTextInput" className="label checkbox-label">
        <FormattedMessage id={`${aName}`} />
      </label>
      <input
        type={type}
        id="disabledTextInput"
        className="input-checkbox"
        placeholder={`Enter ${aName}`}
        name={name}
        onChange={updateFilters(name)}
        value={value}
      />
      {infoKey && (
        <div className="info-txt">
          <FormattedMessage id={infoKey} />
        </div>
      )}
    </div>
    )
  }

  return (
    <div className={`mb-3 custom-group ${width}`}>
      <label htmlFor="disabledTextInput" className="label">
        <FormattedMessage id={`${aName}`} />
      </label>
      <input
        type={type}
        id="disabledTextInput"
        className="input"
        placeholder={`Enter ${aName}`}
        name={name}
        onChange={updateFilters(name)}
        value={value}
      />
      {infoKey && (
        <div className="info-txt">
          <FormattedMessage id={infoKey} />
        </div>
      )}
      
    </div>
  )
}
export default Field
