import "./DeliveryOptions.scss";

export const DeliveryOptions = () => {

  return (
    <>
      <form className="form__radio-group">
        <fieldset className="form__radio-fieldset">
          <legend className="form__radio-legend">
            Shipping and delivery options
          </legend>
          <input
            type="radio"
            name="form__stm"
            id="form__shiptome"
            className="form__radio-input"
            aria-describedby="Arrives in 5-6 business days"
          />
          <label htmlFor="form__shiptome" className="form__radio-label">
            <span className="form__radio-button"></span> 
            <p className="form__label-container">
              <span className="form__label-title">Ship to me</span>
              <span className="form__radio-subtitle">Arrives in 5-6 business days</span>
            </p>
          </label>
          
        </fieldset>
        <h2 className="form__radio-seperater"><span className="form__radio-seperater--title">OR</span></h2>
        <fieldset className="form__radio-fieldset form__radio-fieldset-otheroptions">
          <legend className="form__radio-legend">
            Shipping and delivery options
          </legend>

          <input
            type="radio"
            name="form__stm"
            id="form__pickupstore"
            className="form__radio-input"
            aria-describedby="In-stock and available for pick up within 24 hours"
          />
          <label htmlFor="form__pickupstore" className="form__radio-label">
            <span className="form__radio-button"></span> 
            <p className="form__label-container">
              <span className="form__label-title">Pick up at Beverly Center</span>
              <span className="form__radio-subtitle form__radio-subtitle-pickup">In-stock and available for pick up within 24 hours</span>
              <a aria-label="show nearby stores" href = "#" className="form__label-title form__label-title--showmore">Show nearby stores</a>
            </p>
          </label>

          <input
            type="radio"
            name="form__stm"
            id="form__sameday"
            className="form__radio-input"
            aria-describedby="Check out by 2 pm for delivery today ($14.99)"
          />
          <label htmlFor="form__sameday" className="form__radio-label">
            <span className="form__radio-button"></span> 
            <p className="form__label-container">
              <span className="form__label-title">Same-day delivery</span>
              <span className="form__radio-subtitle">Check out by 2 pm for delivery today ($14.99)</span>
              <a aria-label="Shipping and delivery option - Same day delivery" href = "#" className="form__label-title form__label-title--showmore">What is this?</a>
            </p>
          </label>
          
        </fieldset>
      </form>
    </>
  );
};
