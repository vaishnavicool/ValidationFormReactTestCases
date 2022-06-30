import "./style.scss"

import { Button } from "react-bootstrap"

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
        +Add Filters
      </Button>
      <Button variant="link" className="filter-btn">
        Clear All
      </Button>
    </>
  )
}

export default FilterChipPanel
