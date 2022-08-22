import useEnhancer from "../enhancer";
import { renderHook,  render, screen} from "@testing-library/react"
import Dashboard from "../index"

test("should take data", async() => {
    const {result} = renderHook(() => useEnhancer());
  
    console.log("888888888888888888888888222244444444444444444",result);
    
   expect(result.current.users).toEqual([ ]);
})

test('renders learn react link', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/ Name/i);
  expect(linkElement).toBeInTheDocument();
});