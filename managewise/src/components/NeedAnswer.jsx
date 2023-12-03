import React from "react";
import Card4 from "../Cards/Card4";
import './NeedAnswer.css'
const NeedAnswer = () => {
  return (
    <div className="need">
        <div className="needinner">
      <div className="needleft">
      <div className="needlogo">
            <p>🙋‍♀️ FAQ</p>
          </div>
        <div className="lefttop">
          <h1>Need <span>Answers?</span></h1>
        </div>
        <div className="leftbottom">
            <h3>Check out our most commonly asked questions below to find the information you need.</h3>
        </div>
      </div>
      <div className="needright">
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
