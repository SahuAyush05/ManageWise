import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import Card3 from '../Cards/Card3';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import './Features.css';
import Container3 from '../Cards/Container3';
const Features=()=>{
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
    return (
        <div className='features' id='features'>
            <div className="premier">
          <div className='featuresfirst'>
            <div className='featureshello'>
              <p>🔥 Premire Features</p>
            </div>
            <h1>Discover our product's <span>Capabilities</span></h1>
          </div>
          <div className='featuressecond'>
            <h3>
            Don't settle for mediocrity - embrace the future of management with Manage Wise.</h3>
          </div>
          <div className='featureCard'>
          <Card1 />
          <Card2/>
          </div>
          <div className='featurecard2'>
            <Container3/>
          </div>
          
        </div>
        </div>
        
      );
}

export default Features;