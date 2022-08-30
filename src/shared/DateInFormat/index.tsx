import "./style.scss"
import {format, parse} from "date-fns"
import { useState } from "react"

const DateInFormat = () => {
  const dateFormat="MMM-dd-yyyy"
  const orgDateFormat = "yyyy-mm-dd"
  const [date, setDate] = useState(new Date)
  const formattedDate  = format(date ,dateFormat)
  const orgDate  = format(date ,orgDateFormat)
  console.log(formattedDate);
  
     
  function handleDateUpdate(e ) {
    const {value} = e.target
    let parseDate = parse(value, orgDateFormat, new Date )
    console.log(parseDate, "parseDate");
    setDate(parseDate)
  }

  return (
    <div id="parent">
      <div className="one"></div><input type="date" className="dateInput "  onChange={handleDateUpdate} />
      <div className="two">{formattedDate}  </div>
    </div>
  )
}

export default DateInFormat
