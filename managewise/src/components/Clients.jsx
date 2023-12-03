import React from "react";
import './Clients.css';
import Testimonials from "../Cards/Testmonials";
const Clients = () => {
  return (
    <div className="clients" id="clients">
      <div className="clientstop">
        <div className="clientlogo">
          <p>🧡 TESTIMONIALS</p>
        </div>
        <div className="clienthead">
          <h1>
          Hear from our <span>Satisfied </span>clients
          </h1>
        </div>
        <div className="clientdes">
          <h3>
          Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
          </h3>
        </div>
      </div>
      <div className="clientsbottom">
        <Testimonials/>
      </div>
    </div>
  );
};

export default Clients;
