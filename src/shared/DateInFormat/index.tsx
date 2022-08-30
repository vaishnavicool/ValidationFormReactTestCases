import "./style.scss"
import { useEffect, useState } from "react"

const DateInFormat = () => {
  const [date, setDate] = useState<string>()

  useEffect(() => {
    let todayDate = new Date();
    handleDateUpdate(`${todayDate.getFullYear()}-0${todayDate.getMonth() + 1}-${todayDate.getDate()}`) // month +1 because 0 represents January
  }, [])

  function handleDateUpdate(value) {
    const newFormat = new Date(value).toLocaleDateString('EN-IN', { month: 'short', year: 'numeric', day: '2-digit' })
    const dateArr = newFormat.split('-')
    let dummyValue = dateArr[0]
    dateArr[0] = dateArr[1]
    dateArr[1] = dummyValue
    let formattedDate = dateArr.join('-')
    setDate(formattedDate)
  }

  return (
    <div id="parent">
      <div className="one"></div><input type="date" className="dateInput " onChange={(e) => handleDateUpdate(e.target.value)} />
      <div className="two">{date}</div>
    </div>
  )
}

export default DateInFormat

