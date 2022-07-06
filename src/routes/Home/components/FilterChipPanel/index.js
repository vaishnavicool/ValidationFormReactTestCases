import "./style.scss"

import { Button } from "react-bootstrap"
import Image from "shared/Image"
import { FormattedMessage } from "react-intl"

const FilterChipPanel = (props) => {
  let { setShow, setModalType, aFilters, removeAFilter } = props
  return (
    <>
      <div className="filter-input">
        {Object.keys(aFilters).map((d) => (
          <span key={d} className="badge filter-chip">
            <FormattedMessage id={`leftpanel.${d}`} />:{aFilters[d]}
            
              <Image src="cross.png" className="filter-remove" onClick={() => removeAFilter(d)} />
          </span>
        ))}
      </div>
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
