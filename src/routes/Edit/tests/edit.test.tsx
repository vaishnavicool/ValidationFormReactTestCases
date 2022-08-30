import React from "react"
import { render, screen } from "@testing-library/react"
import EditUser from ".."
import {IntlProvider} from 'react-intl';

describe("test edit user", () => {
  test("renders a name", () => {
    <IntlProvider locale="en">
    render(<EditUser />)
    const lableElement = screen.getByText(/ Name /i)
    expect(lableElement).toBeInTheDocument()
    
    </IntlProvider>
  })
  
})

