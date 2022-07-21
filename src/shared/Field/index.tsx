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
  } = props

  let intl = useIntl()
  let labelKey = `form.${name}`
  let aName = intl.formatMessage({
    id: labelKey,
  })

  let value = ""
  if (actionIcon && actionHandler) {
    return (
      <div className={`mb-3 ${width}`} onClick={actionHandler}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
          </svg>{" "}
          <span>Select Document</span>
        </label>
      </div>
    )
  }
  if (type == "checkbox") {
    return (
      <div className={`mb-3 custom-group ${width} checkbox-container`}>
        <label htmlFor="disabledTextInput" className="label checkbox-label">
          <FormattedMessage id={`${labelKey}`} />
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
        <FormattedMessage id={`${labelKey}`} />
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
      {infoKey && (
        <div className="info-txt">
          <FormattedMessage id={infoKey} />
        </div>
      )}
    </div>
  )
}
export default Field
