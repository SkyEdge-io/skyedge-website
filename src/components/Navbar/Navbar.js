import './Navbar.css';
import skyedge from '../../assets/skyedge-ico.png';
import hamburger from '../../assets/hamburger.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="navbar">
      <img src={skyedge} className="navbar-icon" />
      <img onClick={() => setIsNavExpanded(!isNavExpanded)} src={hamburger} className="hamburger" />
      <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <li><a href="">About</a></li>
        <li><a href="">White Paper</a></li>
        <li><a href="">Tokenomics</a></li>
        <li><a href="">Team</a></li>
        <li><a href="">Roadmap</a></li>
      </ul>
    </div>
  )
};

export default Navbar;
