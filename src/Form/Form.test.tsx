import { fireEvent, render, screen } from "@testing-library/react";
import FormExampleForm from "./Form";

describe("Email Validation Test Case", () => {

   
    test(`Validate to don't allow any special characters in the customers email`, () => {
      render(<FormExampleForm />);
      let test1: any = screen.getByTestId("submitTestId");
      fireEvent.click(test1);
      let test2: any = screen.getByTestId("submitTestIdPara");
      let test3 : any =test2.innerHTML;
      expect(test3).toBe("Email is valid")
    });
  
   
  });
  