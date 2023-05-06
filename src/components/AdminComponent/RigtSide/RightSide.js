import React from "react";
// import CustomerReview from "../CustomerReview/CustomerRepetation";
import CustomerRepetation from "../CustomerReview/CustomerRepetation";
// import Updates from "../imgs/components/Updates/Updates";
import "./RightSide.css";
import Updates from "../Updates/Updates";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Repetation</h3>
        <CustomerRepetation />
      </div>
    </div>
  );
};

export default RightSide;
