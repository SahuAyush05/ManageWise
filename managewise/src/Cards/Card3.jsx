import React from "react";
import "./Card3.css";
import image4 from "../assets/image4.webp";
const Card3 = () => {
  return (
    <div className="card3">
      <div className="imgcontainer">
        <img src={image4} alt="image4" />
      </div>
      <div className="title-container">
        <h2>Flexible Scheduling</h2>
      </div>
      <div className="desp-container">
        <p>Say goodbye to chaos with our smart task management system</p>
      </div>
    </div>
  );
};

export default Card3;
