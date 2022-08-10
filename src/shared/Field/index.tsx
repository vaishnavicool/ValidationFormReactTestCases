import "./style.scss"

import { FormattedMessage, useIntl } from "react-intl"

import Image from "shared/Image"
import Select from "react-select"
import { useEffect, useState } from "react"

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
    onChange,
    selectedOption
    
  } = props


  let intl = useIntl()
  let labelKey = ""
  let aName = ""
let [file,setFile]=useState({name:false})

useEffect(()=>{
setFile(props.file)
},[props.file])

  if (name) {
    labelKey = `form.${name}`
    aName = intl.formatMessage({
      id: labelKey,
    })
  }

  let value = ""
  if (actionIcon && actionHandler) {
    return (
      <div
        className={`mb-3 ${width} ${actionIcon.split(".")[0]}`}
        onClick={handlers?.[actionHandler]}
      >
        <Image src={actionIcon} />
      </div>
    )
  }
  if (type == "dropdown" && allDropdownOpts) {
    let selectedVal=selectedOption?selectedOption:filters[name]
    let handler= onChange?onChange:update(name)
    value = allDropdownOpts[name]?.find((d: any) => d.label == selectedVal)
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
          onChange={handler}
          placeholder={`${placeholder ? `${placeholder}` : `Select`}`}
          value={value}
          isSearchable={true}
          className="basic-single"       
          options={allDropdownOpts[name]}
          theme={theme => ({
            ...theme,
            colors: {
                ...theme.colors,
                neutral50: '#c0c0c0',  // Placeholder color
            },
        })}
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
          onChange={(e:any)=>{
            let file=e.target.files[0]         
            setFile(file)  
            onChange(file)        
           
          }}
          className="inputfile inputfile-1"
          data-multiple-caption="{count} files selected"
          multiple={false}
        />
        <label htmlFor="file-1">
          <Image src="ic_upload.png" />
          <span>{file?.name?file.name:placeholder}</span>
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
    <div className="row">

    
    <div className={`mb-3 custom-group ${width}`}>
      <div className="col-3">
      <label htmlFor="disabledTextInput" className="label">

        <FormattedMessage id={`${labelKey}`} />:
        {infoKey && (
          <span className="icon-info">
            <div className="tool-tip">
              <FormattedMessage id={infoKey} />
            </div>
            <Image src="ic_info.png" />
          </span>
        )}
      </label>
      </div>
      <div className="col-9">
      <input
        type={type}
        id="disabledTextInput"
        className="input"
        placeholder={`${placeholder ? `${placeholder}` : `Enter`}`} 
        name={name}
        onChange={update(name)}
        value={value}
      />
      </div>
    </div>
    </div>
  )
}
export default Field
