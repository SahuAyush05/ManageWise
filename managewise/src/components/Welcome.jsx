import './Welcome.css';
import image2 from "../assets/image2.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Welcome = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className='start'>
        <div className="welcome">
      <div className='first'>
        <div className='hello'>
          <p>👋 WELCOME TO MANAGE WISE!!</p>
        </div>
        <h1>Empower your business with <span>strategic </span>insights</h1>
      </div>
      <div className='second'>
        <h3>
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </h3>
      </div>
      <div className='btn-container'>
        <div className='btn1'><p>Get Started</p></div>
        <div className='btn2'><p>Watch Demo</p></div>
      </div>
      <div className='wlcmimg' data-aos="zoom-in-down">
        <img className='image2' src={image2} alt='image2'/>
      </div>
    </div>
    </div>
    
  );
};

export default Welcome;
