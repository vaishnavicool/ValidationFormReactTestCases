import "./style.scss"
import { Button } from "react-bootstrap"
import Image from "shared/Image"
import { FormattedMessage } from "react-intl"
import EllipsisText from "react-ellipsis-text"

const FilterChipPanel = (props) => {
  let { setShow, setModalType, aFilters, removeAFilter, clearFilters } = props
  console.log(aFilters)
  return (
    <>
      <div className="filter-input">
        <div className="d-flex ellipsis">
          {Object.keys(aFilters)
            .sort((a, b) => a.localeCompare(b))
            .map((d) => (
              <span key={d} className="badge filter-chip">
                <FormattedMessage id={`form.${d}`} />:
                <EllipsisText text={aFilters[d]} length={20} />
                <Image
                  src="cross.png"
                  className="filter-remove"
                  onClick={() => removeAFilter(d)}
                />
              </span>
            ))}
        </div>
        {Object.keys(aFilters).length > 0 && (
          <div className="clear-filter">
            <Image
              src="icon-cross.png"
              style={{ cursor: "pointer" }}
              onClick={clearFilters}
            />
          </div>
        )}
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
