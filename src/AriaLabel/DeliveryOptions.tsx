// import { useState } from "react";
// import { NearByStore } from "../NearByStore/NearByStore";
// import "./DeliveryOptions.scss";

export const DeliveryOptions = () => {
  // const [nearbyCenters, showNearbyCenters] = useState(false);
  return (
    <>
      <form className="form__radio-group">
        <fieldset className="form__radio-fieldset">
          Aria-label
          <br />
          <button className="menu-burger">Aria-label</button>
          <br />
          <br />
          <br />
          <br />
          Aria-Labelledby
          <aside aria-labelledby="aside-gigs">
            <h4 id="aside-gigs">Upcoming gigs</h4>
          </aside>
          <br />
          <br />
          <br />
          <br />
          Aria-hidden
          <pre aria-hidden="true">
            <ul>
              <li>apples</li>
              <li>peaches</li>
            </ul>
          </pre>
          <br />
          <br />
          <br />
          <br />
          Aria-disablled Aria-Live
            <div>
              <label htmlFor="email">Your e-mail</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="terms">You agree to our terms and policy</label>
              <input type="checkbox" id="terms" />
            </div>
            <button aria-disabled="true">Submit when any checkbox is checked. Also use for alert, pop up</button>
            <p className="visually-hidden" aria-live="assertive"></p>
          
          <br />
          <br />
          <br />
          <br />
          
        
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
         
        
          
            

          
          
        </fieldset>
      </form>
    </>
  );
};
