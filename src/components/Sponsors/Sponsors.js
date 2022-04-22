import "./Sponsors.css";

function Sponsors(props) {
  return (
    <div className="sponsors">
        <a id="sponsors"/>
      <div className="sponsors-hr"/>
      <div className="sponsors-title">Supported by visionaries:</div>
      <div className="sponsors-logos-group">
        {props.logos.map((item, i) => 
          <div key={i} className="sponsors-link">
            <img className="sponsor-logo" src={item}/>
          </div>
        )}
      </div>
      <a href="https://invest.endowl.com" className="sponsors-cta-link">
        <div className="sponsors-cta">
          Become a featured supporter! Endowl's Rolling SAFE is now available to accredited investors.
        </div>
      </a>
      <div className="sponsors-hr"/>
    </div>
  );
};

export default Sponsors;