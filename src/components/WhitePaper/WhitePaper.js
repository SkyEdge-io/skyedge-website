import './WhitePaper.css';
import whitepaper from '../../assets/write-paper.svg';

const WhitePaper = () => {
  return (
    <div className="container whitepaper">
      <h1>How we transform</h1>
      <div className="whitepaper-content">
        <img src={whitepaper} alt="img" style={{width: "12vw"}}/>
        <div className="steps-container">
          <span className="step">Step 1</span>
          <span className="step">Step 2</span>
          <span className="step">Step 3</span>
          <span className="step">Step 4</span>
        </div>
        <div className="whitepaper-hero">
          <span className="whitepaper-hero-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit aliquam justo, urna, neque. Et viverra at facilisis dictum aliquet commodo. Aenean sed id
          </span>
        </div>
      </div>
    </div>
  )
};

export default WhitePaper;
