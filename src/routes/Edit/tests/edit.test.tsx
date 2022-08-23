import React from "react"
import { render, screen } from "@testing-library/react"
import EditUser from ".."

describe("test edit user", () => {
  test("renders a name", () => {
    render(<EditUser />)
    const lableElement = screen.getByText(/ Name /i)
    expect(lableElement).toBeInTheDocument()
  })
  
})
