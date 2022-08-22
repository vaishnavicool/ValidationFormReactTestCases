import * as React from "react"
import * as ReactDOM from "react-dom"
import { act } from "react-dom/test-utils"
//import Edit from "."
import EditUser from "./index"

describe("EditUser component tests", () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    ReactDOM.render(<EditUser />, container)
  })

  // afterEach(() => {
  //     document.body.removeChild(container);
  //     container.remove();
  // })
})
