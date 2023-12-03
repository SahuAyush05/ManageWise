import React from "react";
import Card6 from "../Cards/Card6";
import Card7 from "../Cards/Card7";
import "./Pricing.css";
import Card8 from "../Cards/Card8";
const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricinginner">
        <div className="priceupper">
          <div className="featuresfirst">
            <div className="featureshello">
              <p>💲PRICING</p>
            </div>
            <h1>
              Select Your Ideal <span>Pricing </span>Plan
            </h1>
            <div className="featuressecond">
              <h3>
              At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
              </h3>
            </div>
          </div>
        </div>
        <div className="pricelower">
          <div class="w-96">
            <Card6 />
          </div >
          <div class="w-96">
            <Card7 />
          </div>
          <div class="w-96">
           <Card8/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
