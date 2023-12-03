import './Welcome.css';
import image2 from "../assets/image2.webp"
const Welcome = () => {
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
      <div className='wlcmimg'>
        <img className='image2' src={image2} alt='image2'/>
      </div>
    </div>
    </div>
    
  );
};

export default Welcome;
