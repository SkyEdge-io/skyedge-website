import './Navbar.css';
import skyedge from '../../assets/skyedge-ico.png';
import hamburger from '../../assets/hamburger.svg';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="navbar">
      <img src={skyedge} className="navbar-icon" />
      <img onClick={() => setIsNavExpanded(!isNavExpanded)} src={hamburger} className="hamburger" />
      <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <Link to="about" smooth={true} onClick={() => setIsNavExpanded(false)}><li><a href="">About</a></li></Link>
        <Link to="whitepaper" smooth={true} onClick={() => setIsNavExpanded(false)}><li><a href="">White Paper</a></li></Link>
        {/*<li><a href="">Team</a></li>*/}
        <Link to="roadmap" smooth={true} onClick={() => setIsNavExpanded(false)}><li><a href="">Roadmap</a></li></Link>
        <Link to="tokenomics" smooth={true} onClick={() => setIsNavExpanded(false)}><li><a href="">Tokenomics</a></li></Link>
      </ul>
    </div>
  )
};

export default Navbar;
