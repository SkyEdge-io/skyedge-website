import './Roadmap.css';
import step1 from '../../assets/step1.svg';
import step2 from '../../assets/step2.svg';
import step3 from '../../assets/step3.svg';
import step4 from '../../assets/step4.svg';

const Roadmap = () => {
  const steps = [
    {
      heading: ''
    }
  ];

  return (
    <div className="container roadmap" id="roadmap">
      <h1>Roadmap</h1>
      <div className="roadmap-container">
        <div className="roadmap-steps-container">
          <div className="roadmap-step">
            <img src={step1} className="roadmap-step-image" />
            <div className="roadmap-step-hero">
              <h2>Skyedge Testnet Sample</h2>
              <h2>Ml Models</h2>
            </div>
          </div>
        </div>
        <div className="roadmap-steps-container" style={{justifyContent: 'flex-end'}}>
          <div className="roadmap-step" style={{flexDirection: 'row-reverse'}}>
            <img src={step2} className="roadmap-step-image" />
            <div className="roadmap-step-hero">
              <h2 style={{textAlign: 'right'}}>Skyedge Mainnet</h2>
              <h2 style={{textAlign: 'right'}}>Skyedge Mobile App</h2>
              <h2 style={{textAlign: 'right'}}>Production ML</h2>
              {/*<p style={{textAlign: 'right'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit aliquam justo, urna, neque. Et viverra at facilisis dictum aliquet commodo. Aenean sed id</p>*/}
            </div>
          </div>
        </div>
         <div className="roadmap-steps-container">
          <div className="roadmap-step">
            <img src={step3} className="roadmap-step-image" />
            <div className="roadmap-step-hero">
              <h2>Skyedge Mainnet</h2>
              <h2>Private SDK Launch</h2>
              <h2>Initial Customer Onboarding</h2>
            </div>
          </div>
        </div>
        <div className="roadmap-steps-container" style={{justifyContent: 'flex-end'}}>
          <div className="roadmap-step" style={{flexDirection: 'row-reverse'}}>
            <img src={step4} className="roadmap-step-image" />
            <div className="roadmap-step-hero">
              <h2 style={{textAlign: 'right'}}>Skyedge Mainnet</h2>
              <h2 style={{textAlign: 'right'}}>Public Launch</h2>
              <h2 style={{textAlign: 'right'}}>Open SDK</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Roadmap;
