import './style.scss'

import {Button} from "react-bootstrap"
import React from 'react'

const FilterChipPanel = () => {
  return (
    <>
    <div className="filter-input" >&nbsp;</div>
    <Button variant="link" className='filter-btn'>+Add Filters</Button>
    <Button variant="link" className='filter-btn'>Clear All</Button>
    </>
  )
}

export default FilterChipPanel