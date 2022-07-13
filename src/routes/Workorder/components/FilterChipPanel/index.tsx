import "./style.scss"

import { Button } from "react-bootstrap"
import Image from "shared/Image"
import { FormattedMessage } from "react-intl"

const FilterChipPanel = (props) => {
  let { setShow, setModalType, aFilters, removeAFilter, clearFilters } = props

  return (
    <>
      <div className="filter-input">
        <div className="d-flex">
          {Object.keys(aFilters).map((d) => (
            <span key={d} className="badge filter-chip">
              <FormattedMessage id={`${d}`} />:{aFilters[d]}
              <Image
                src="cross.png"
                className="filter-remove"
                onClick={() => removeAFilter(d)}
              />
            </span>
          ))}
        </div>
        <div className="clear-filter">
          <Image
            src="icon-cross.png"
            style={{ cursor: "pointer" }}
            onClick={clearFilters}
          />
        </div>
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
    </>
  )
}

export default FilterChipPanel
