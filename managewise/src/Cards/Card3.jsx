// Card3.js
import React, { useEffect } from "react";
import "./Card3.css";
import "aos/dist/aos.css";
import AOS from "aos";


const Card3 = ({ title, description, image }) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="card3" data-aos="fade-up">
      <div className="imgcontainer">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h2>{title}</h2>
      </div>
      <div className="desp-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card3;
