import { useEffect } from "react";

export const DeliveryOptions = () => {

  useEffect(() => {
    
  }, []);

  return (
    <>
    <form className="form__radio-group">
      <fieldset>
        <legend className="form__radio-legend">Shipping and delivery options</legend>
        <input type="radio" name="form__stm" id="form__shiptome" className="form__radio-input" aria-describedby="Arrives in 5-6 business days"/>
        <label htmlFor="form__shiptome" className="form__radio-label" />
      </fieldset>
    </form>
    </>
  );
};
