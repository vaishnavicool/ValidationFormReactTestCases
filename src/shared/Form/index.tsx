import Field from "shared/Field"

const Form = ({ config, update, handlers = {} }) => {
  return (
    <div className="row">
      {config.map((d: any, index: any) => {
        return (
          <Field
            key={index}
            name={d.name}
            {...{ ...d }}
            update={update}
            handlers={handlers}
          />
        )
      })}
    </div>
  )
}

export default Form
