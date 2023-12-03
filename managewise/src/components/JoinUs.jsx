import React from "react";
import "./JoinUs.css";
import image6 from '../assets/image6.webp'
const JoinUs = () => {
  return (
    <div className="joinUs">
      <div className="joinInner">
        <div className="joincontentwrapper">
          <div className="joinleft">
            <div className="joinlogo">
              <p>👋 DON'T MISS OUT</p>
            </div>
            <div className="joinhead">
              <h1>
                Unleash your <span>Potential</span> with us
              </h1>
            </div>
            <div className="joindes">
              <p>
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </p>
            </div>
            <div>
              <div className="joinbtn">
                <p>Try Out Now</p>
              </div>
            </div>
          </div>
          <div className="joinright">
            <div className="happytop">
                <div className="happy">
                    <div className="happycard">
                        <p><span>200+</span>Happy Users</p>
                    </div>
                </div>
            </div>
            <div className="happybottom">
                <div className="rightimage">
                    <img src={image6} alt="image6"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
