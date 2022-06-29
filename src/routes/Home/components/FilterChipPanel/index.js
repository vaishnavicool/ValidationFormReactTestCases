import './style.scss'

import {Button, Modal} from "react-bootstrap"
import React,{useState} from 'react'

import FilterPanel from "../FilterPanel"
import useEnhancer from 'routes/Home/enhancer'
const FilterChipPanel = (props) => {
let {show,setShow} = props
  return (
    <>
    <div className="filter-input" >&nbsp;</div>
    <Button variant="link" className='filter-btn' onClick={() => props.setShow(true)}>+Add Filters</Button>
    <Button variant="link" className='filter-btn'>Clear All</Button>
    <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
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