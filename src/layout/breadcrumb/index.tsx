import React, { Fragment } from "react";
import "./style.scss";
import { FormattedMessage } from "react-intl"


function TopSection(props:any) {
  return (
    <Fragment>
      <div className="mainContainer">
        <p className="content">
        <FormattedMessage id="breadcrumb" /></p>
      </div>
      
    </Fragment>
  );
}
export default TopSection;
