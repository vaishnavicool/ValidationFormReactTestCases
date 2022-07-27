import "./style.scss"

import { FormattedMessage, useIntl } from "react-intl"

import Image from "shared/Image"
import Select from "react-select"

function Field(props: any) {
  const {
    name,
    type = "text",
    update = () => {},
    filters = {},
    allDropdownOpts = { name: ["a", "b"] },
    width = "col-6",
    infoKey,
    placeholder,
    actionIcon,
    actionHandler,
    handlers,
  } = props

  let intl = useIntl()
  let labelKey = ""
  let aName = ""

  if (name) {
    labelKey = `form.${name}`
    aName = intl.formatMessage({
      id: labelKey,
    })
  }

  let value = ""
  if (actionIcon && actionHandler) {
    return (
      <div className={`mb-3 ${width} ${actionIcon.split('.')[0]}`} onClick={handlers?.[actionHandler]}>
        <Image src={actionIcon} />
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
          {infoKey && (
            <span className="icon-info">
              <div className="tool-tip">
                <FormattedMessage id={infoKey} />
              </div>
              <Image src="ic_info.png" />
            </span>
          )}
        </label>
        <Select
          onChange={update(name)}
          placeholder={`${placeholder ? `${placeholder}` : `Select`}`}
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
  if (type == "file") {
    return (
      <div className="box col-5 gx-2">
        <input
          type="file"
          name="file-1[]"
          id="file-1"
          className="inputfile inputfile-1"
          data-multiple-caption="{count} files selected"
          multiple={false}
        />
        <label htmlFor="file-1">
          <Image src="ic_upload.png" />

          <span>Select Document</span>
        </label>
      </div>
    )
  }
  if (type == "checkbox") {
    return (
      <div className={`mb-3 custom-group ${width}`}>
      <label htmlFor="disabledTextInput" className="label">
        <FormattedMessage id={`${labelKey}`} />
        {infoKey && (
          <span className="icon-info">
            <div className="tool-tip">
              <FormattedMessage id={infoKey} />
            </div>
            <Image src="ic_info.png" />
          </span>
        )}
      </label>
      <div className={`custom-group checkbox-container`}>
        <label htmlFor="disabledTextInput" className="label checkbox-label">
          {value ? "Yes" : "No"}
        </label>
        <input
          type={type}
          id="disabledTextInput"
          className="input-checkbox"
          placeholder={`Enter ${aName}`}
          name={name}
          onChange={update(name)}
          value={value}
        />
      </div>
    </div> 
    )
  }

  return (
    <div className={`mb-3 custom-group ${width}`}>
      <label htmlFor="disabledTextInput" className="label">
        <FormattedMessage id={`${labelKey}`} />
        {infoKey && (
          <span className="icon-info">
            <div className="tool-tip">
              <FormattedMessage id={infoKey} />
            </div>
            <Image src="ic_info.png" />
          </span>
        )}
      </label>
      <input
        type={type}
        id="disabledTextInput"
        className="input"
        placeholder={`Enter ${aName}`}
        name={name}
        onChange={update(name)}
        value={value}
      />
    </div>
  )
}
export default Field
