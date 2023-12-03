import React from "react";
import "./Card2.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

import image3 from "../assets/image3.webp";
const Card2 = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="card2"  data-aos="fade-left">
      <div className="imgcontainer">
        <img src={image3} alt="image3" />
      </div>
      <div className="title-container">
        <h2>Smart Task Management</h2>
      </div>
      <div className="desp-container">
        <p>Say goodbye to chaos with our smart task management system</p>
      </div>
    </div>
  );
};

export default Card2;
