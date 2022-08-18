import './About.css';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import discord from '../../assets/discord.svg';

const About = () => {
  return (
    <div className="container about">
      <h1>About</h1>
      <div className="about-cards-container">
        <div className="socials-container">
          <div className="about-card" style={{width: "100%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit aliquam justo, urna, neque. Et viverra at facilisis dictum aliquet commodo. Aenean sed id feugiat cursus sit at ut volutpat. Tempor magnis cursus etiam nunc diam dignissim.</div>
          <div className="socials">
            <span className="social-acc"><img src={linkedin} /></span>
            <span className="social-acc"><img src={twitter} /></span>
            <span className="social-acc"><img src={discord} /></span>
          </div>
        </div>

        <div className="about-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit aliquam justo, urna, neque. Et viverra at facilisis dictum aliquet commodo. Aenean sed id feugiat cursus sit at ut volutpat. Tempor magnis cursus etiam nunc diam dignissim.</div>
        <div className="about-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit aliquam justo, urna, neque. Et viverra at facilisis dictum aliquet commodo. Aenean sed id feugiat cursus sit at ut volutpat. Tempor magnis cursus etiam nunc diam dignissim.</div>
              </div>
    </div>
  )
};

export default About;
