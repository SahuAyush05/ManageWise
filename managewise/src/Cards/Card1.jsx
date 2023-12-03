import React from "react";
import './Card1.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';
const Card1 = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="card1" data-aos="fade-right" >
      <div className="card1inner">
        <p className="star">⭐️</p>
      </div>
      <div className="card1para">
        <p>
          Boost productivity and streamline workflow with us. Enjoy our
          intuitive interface and robust features.
        </p>
      </div>
    </div>
  );
};

export default Card1;
