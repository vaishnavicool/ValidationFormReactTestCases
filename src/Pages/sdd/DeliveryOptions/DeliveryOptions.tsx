import { useEffect, useState } from "react";

export const DeliveryOptions = () => {

  useEffect(() => {
    
  }, []);

  return (
    <>
    <form class="form__radio-group">
      <fieldset>
        <legend className="form__radio-legend">Shipping and delivery options</legend>
        <input type="radio" name="form__stm" id="form__shiptome" className="form__radio-input" aria-describedby="Arrives in 5-6 business days"/>
        <label class="form__label-radio" htmlFor="form__shiptome" className="form__radio-label" />
      </fieldset>
    </form>
    </>
  );
};
