import Field from 'shared/Field'

const Form = ({config}) => {
  return (
    <div className='row'>
      {config.map((d: any, index:any) => {
        return <Field key={index} name={d.name} {...{ ...d }} />
      })}
    </div>
  )
}

export default Form
