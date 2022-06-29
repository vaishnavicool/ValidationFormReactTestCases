import './style.scss'

import {Button, Modal} from "react-bootstrap"
import React,{useState} from 'react'

import FilterPanel from "../FilterPanel"

const FilterChipPanel = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className="filter-input" >&nbsp;</div>
    <Button variant="link" className='filter-btn' onClick={() => setShow(true)}>+Add Filters</Button>
    <Button variant="link" className='filter-btn'>Clear All</Button>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Filters
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FilterPanel {...props} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FilterChipPanel