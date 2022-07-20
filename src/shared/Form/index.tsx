import Field from 'shared/Field'

const Form = ({config,update}) => {
  return (
    <div className='row'>
      {config.map((d: any, index:any) => {
        return <Field key={index} name={d.name} {...{ ...d }} update={update}/>
      })}
    </div>
  )
}

export default Form
