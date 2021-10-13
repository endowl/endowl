import "./Team.css"

function Team(props) {
  return (
    <div className="team">
        <a id="team" />
      <div className="team-hr"/>

      <div className="team-intro">
        <h3 className="team-intro-title">Meet the <span className="team-intro-title-emphasis">endowl</span> team</h3>
        <div className="team-intro-primary"><span className="team-emphasis">Our blockchain experts</span></div>
        <div className="team-intro-secondary">With combined experience in blockchain, software engineering, web3, dApps, python, and smart contracts of over 30 years you'll know you're in the right hands with <span className="team-emphasis">endowl</span>!</div>
      </div>

      <div className="team-members">
        {props.children}
      </div>
    </div>
  );
}

export default Team