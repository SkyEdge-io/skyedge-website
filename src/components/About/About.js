import './About.css';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import discord from '../../assets/discord.svg';
import skyedge from '../../assets/skyedge.png';

const About = () => {
  return (
    <div className="container about">
      <h1>About</h1>
      <div className="about-cards-container">
        <div className="socials-container">
          <div className="about-cards" >SkyEdge runs on mobile devices enabling Digital assets and privacy-first AI at scale. We are making distributed computing and blockchain native to billions of mobile devices.</div>
          <div className="socials">
            <div className="social-acc"><img src={linkedin} /></div>
            <div className="social-acc"><img src={twitter} /></div>
            <div className="social-acc"><img src={discord} /></div>
          </div>
        </div>
        <div className="about-col2">
          <div className="about-col2-row1">
            <div className="about-quote-container about-cards">
              <span className="about-quote">“An amazing quote to move people into buying things”</span>
              <span className="about-quote-author">-Me</span>
            </div>
            <div className="about-ico about-cards">H</div>
          </div>
          <div className="about-col2-row2">
            <img src={skyedge} className="about-skyedge"/>
            <div className="about-row2-desc about-cards"> High end smartphone processors today are faster than PC processors from years ago, or very low end PC processors today. We are bringing the power of blockchain to every smartphone and combining it with user data to create the most intelligent internet of the future.</div>
          </div>
        </div>
        <div className="about-col3 about-cards">
          With federated learning and blockchain, we are going to change how the existing world of ML/AI works. We are creating a privacy-first machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging them.
        </div>
      </div>
    </div>
  )
};

export default About;
