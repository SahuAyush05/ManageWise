import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import Card3 from '../Cards/Card3';
import './Features.css';
const Features=()=>{
    return (
        <div className='features'>
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
          <Card1/>
          <Card2/>
          </div>
          <div className='featurecard2'>
            <Card3/>
            <Card3/>
            <Card3/>
          </div>
          
        </div>
        </div>
        
      );
}

export default Features;