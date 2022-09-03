import './Tokenomics.css';

const Tokenomics = () => {
  return (
    <div className="container tokenomics">
      <h1>Tokenomics</h1>
      <div className="token-container">
        <div className="token-col1">
          <div className="token-card">
            <h2>Private Token Sales - 1 <span>5.0%</span></h2>
            <p>SkyEdge runs on mobile devices enabling Digital assets and privacy-first AI at scale. We are making distributed computing and blockchain native to billions of mobile devices.</p>
          </div>
          <div className="token-card">
            <h2>Private Token Sales - 2 <span>7.0%</span></h2>
            <p>SkyEdge runs on mobile devices enabling Digital assets and privacy-first AI at scale. We are making distributed computing and blockchain native to billions of mobile devices.</p>
          </div>
        </div>
        <div className="token-col2">
          <div className="token-col2-row col2-row1">
            <div className="token-card">
              <h2>Private Token Sales - 2 <span>7.0%</span></h2>
              <p>SkyEdge runs on mobile devices enabling Digital assets and privacy-first AI at scale. We are making distributed computing and blockchain native to billions of mobile devices.</p>
            </div>
            <div className="token-card">
              <h2>IDO - Public Offering <span>15.1%</span></h2>
              <p>SkyEdge runs on mobile devices enabling Digital assets and privacy-first AI at scale. We are making distributed computing and blockchain native to billions of mobile devices.</p>
            </div>
          </div>
          <div className="token-col2-row col2-row2">
            <div className="token-card">
              <h2>Pre - IDO Public Sales <span>2.5%</span></h2>
              <p>SkyEdge runs on mobile devices enabling Digital assets and privacy-first AI at scale. We are making distributed computing and blockchain native to billions of mobile devices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Tokenomics;
