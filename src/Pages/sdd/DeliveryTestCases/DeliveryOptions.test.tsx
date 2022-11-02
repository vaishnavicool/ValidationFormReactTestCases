import { fireEvent, render, screen } from "@testing-library/react";
import { DeliveryOptions } from "./DeliveryOptions";

describe("Delivery Options TestCases", () => {



  beforeEach(() => {
    render(<DeliveryOptions />);
  });

  // test("A radio button should just change between checked and unchecked states. ", () => {
  //  let radioBtnInputElem: any = screen.getByTestId("form_input_radio_shipToMe");
  //   fireEvent.click(radioBtnInputElem);
  //   const changeValue = radioBtnInputElem1.checked;
  //   expect(changeValue).toBeTruthy();
  // });
  test("A radio button should just change between checked and unchecked states. ", () => {
    let radioBtnInputElem: any = screen.getByTestId("form_input_radio_shipToMe");
     fireEvent.click(radioBtnInputElem);
     const changeValue = radioBtnInputElem.checked;
     expect(changeValue).toBeTruthy();
   });
   test("A radio button should just change between checked and unchecked states. ", () => {
    let radioBtnInputElem: any = screen.getByTestId("form_input_radio_sameDayDelivery");
     fireEvent.click(radioBtnInputElem);
     const changeValue = radioBtnInputElem.checked;
     expect(changeValue).toBeTruthy();
   });


  test(`Each <label> must include for="input-id" to be associated with its input`, () => {
    let radioBtnInputElem: any = screen.getByTestId("form_label_radio_shipToMe");
    let radioBtnLabel: any = screen.getByTestId("form_input_radio_shipToMe");
    expect(radioBtnLabel.getAttribute("id")).toBe(
      radioBtnInputElem.getAttribute("for")
    );
  });
  test(`Each <label> must include for="input-id" to be associated with its input`, () => {
    let radioBtnInputElem: any = screen.getByTestId("form_label_radio_PickUpBeverlyCenter");
    let radioBtnLabel: any = screen.getByTestId("form_input_radio_PickUpBeverlyCenter");
    expect(radioBtnLabel.getAttribute("id")).toBe(
      radioBtnInputElem.getAttribute("for")
    );
  });
  test(`Each <label> must include for="input-id" to be associated with its input`, () => {
    let radioBtnInputElem: any = screen.getByTestId("form_label_radio_sameDayDelivery");
    let radioBtnLabel: any = screen.getByTestId("form_input_radio_sameDayDelivery");
    expect(radioBtnLabel.getAttribute("id")).toBe(
      radioBtnInputElem.getAttribute("for")
    );
  });

  test("Radio buttons - You should use a native element rather than a custom element", () => {
    let radioBtnInputElem: any = screen.getByTestId("form_input_radio_shipToMe");
    expect(radioBtnInputElem.type).toBe("radio");
  });
  test("Radio buttons - You should use a native element rather than a custom element", () => {
    let radioBtnInputElem: any = screen.getByTestId("form_input_radio_PickUpBeverlyCenter");
    expect(radioBtnInputElem.type).toBe("radio");
  });
  test("Radio buttons - You should use a native element rather than a custom element", () => {
    let radioBtnInputElem: any = screen.getByTestId("form_input_radio_sameDayDelivery");
    expect(radioBtnInputElem.type).toBe("radio");
  });
});
