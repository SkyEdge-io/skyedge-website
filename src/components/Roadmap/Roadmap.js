import './Roadmap.css';
import Step1 from '../../assets/step1.svg';

const Roadmap = () => {
  const steps = [
    {
      heading: ''
    }
  ];

  return (
    <div className="container roadmap">
      <h1>Roadmap</h1>
      <div className="roadmap-container">
        <div className="roadmap-steps-container">
          <div className="roadmap-step">
            <img src={Step1} className="roadmap-step-image" />
            <div className="roadmap-step-hero">
              <h2>Testnet</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit aliquam justo, urna, neque. Et viverra at facilisis dictum aliquet commodo. Aenean sed id</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Roadmap;
