import "./style.scss"

import { Button } from "react-bootstrap"
import Image from "shared/Image"

const FilterChipPanel = (props) => {
  let { setShow, setModalType } = props
  return (
    <>
      <div className="filter-input">&nbsp;</div>
      <Button
        variant="link"
        className="filter-btn"
        onClick={() => {
          setModalType("filter")
          setShow(true)
        }}
      >
        <Image src="filter.png" />
      </Button>
      {/* <Button variant="link" className="filter-btn">
        Clear All
      </Button> */}
      
    </>
  )
}

export default FilterChipPanel
