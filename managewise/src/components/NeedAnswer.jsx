import React from "react";
import Card4 from "../Cards/Card4";
import './NeedAnswer.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const NeedAnswer = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="need" id="faq">
        <div className="needinner">
      <div className="needleft" data-aos="fade-right">
      <div className="needlogo">
            <p>🙋‍♀️ FAQ</p>
          </div>
        <div className="lefttop" >
          <h1>Need <span >Answers?</span></h1>
        </div>
        <div className="leftbottom">
            <h3>Check out our most commonly asked questions below to find the information you need.</h3>
        </div>
      </div>
      <div className="needright" data-aos="fade-left">
        <div className="rightcontainer">
            <div className="rightinner">
                <div className="rightcard">
                    <Card4/>
                    <Card4/>
                    <Card4/>
                    <Card4/>
                    <Card4/>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NeedAnswer;
