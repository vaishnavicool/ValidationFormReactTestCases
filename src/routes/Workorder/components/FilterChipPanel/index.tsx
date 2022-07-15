import "./style.scss"
import { Button } from "react-bootstrap"
import Image from "shared/Image"
import { FormattedMessage } from "react-intl"
import EllipsisText from "react-ellipsis-text"

const FilterChipPanel = (props) => {
  let { setShow, setModalType, aFilters, removeAFilter, clearFilters } = props

  return (
    <>
      <div className="filter-input">
        <div className="d-flex ellipsis">
          {Object.keys(aFilters)         
           .sort((a, b) => a.localeCompare(b))          
          .map((d) => (
            <span key={d} className=
            "badge filter-chip">
               <EllipsisText text={d} length={8} />
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
