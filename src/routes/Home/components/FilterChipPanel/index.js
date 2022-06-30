import './style.scss'

import {Button, Modal} from "react-bootstrap"
import React,{useState} from 'react'

import FilterPanel from "../FilterPanel"
import useEnhancer from 'routes/Home/enhancer'
const FilterChipPanel = (props) => {
let {setShow} = props
  return (
    <>
    <div className="filter-input" >&nbsp;</div>
    <Button variant="link" className='filter-btn' onClick={() => setShow(true)}>+Add Filters</Button>
    <Button variant="link" className='filter-btn'>Clear All</Button>
    
    </>
  )
}

export default FilterChipPanel