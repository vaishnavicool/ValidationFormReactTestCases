import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter TestCases", () => {

  let counterValueDom:any
  let counterValue:any
  let addButton:any
  let minusButton:any
  let counterWrapper:any

  beforeEach(() => {
    render(<Counter />);
    counterValueDom = screen.getByTestId('counterValue');
    counterValue = counterValueDom.innerHTML;
    addButton = screen.getByTestId('incrementBtn');
    minusButton = screen.getByTestId('decrementBtn');
    counterWrapper = screen.getByTestId('counterWrapper');
  });

  test("counter should exist on the DOM", () => {
    expect(counterValueDom).toBeInTheDocument()
  });

  test("Initial counter should be 0", () => {
    expect(counterValue).toBe("0");
  });

  test("Check title", () => {
    expect(counterWrapper.title).toBe('counter value is 0')
  });

  test("Counter value should increase on '+' button click", () => {
    fireEvent.click(addButton);
    const updatedCounter = counterValueDom.innerHTML
    expect(updatedCounter).toBe(`${parseInt(counterValue) + 1}`);
  });

  test("Counter value should decrease on '-' button click", () => {
    fireEvent.click(minusButton);
    const updatedCounter = counterValueDom.innerHTML
    expect(updatedCounter).toBe(`${parseInt(counterValue) - 1}`);
  });
});
