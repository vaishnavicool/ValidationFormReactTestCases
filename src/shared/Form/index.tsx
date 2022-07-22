import Field from "shared/Field"

const Form = ({ config, update, handlers = {}, allDropdownOpts,filters={}}) => {
  return (
    <div className="row">
      {config.form.map((d: any, index: any) => {
        return (
          <Field
            key={index}
            name={d.name}
            { ...d }
            update={update}
            filters={filters}
            allDropdownOpts={allDropdownOpts}
            handlers={handlers}
          />
        )
      })}
    </div>
    
  )
}

export default Form
