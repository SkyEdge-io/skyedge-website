import './Team.css';
import Hribhav from '../../assets/team/hribhav.png';
import CXO from '../../assets/team/CXO.svg';

const Team = () => {
  const members = [
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
    {
      url: Hribhav,
      name: "Hribhav"
    },
 
  ];

  return (
    <div className="container team">
      <h1>Team</h1>
      <div className="members-container">
        {members.map(member => (
          <div className="team-member">
            <img src={CXO} alt="cxo" className="cxo"/>
            <div className="member-hero">
              <img src={member.url} />
              <span>{member.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Team;
