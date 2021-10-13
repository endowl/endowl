import chain from "../../images/Chain.jpeg";
import mascot from "../../images/MeetOwlfred.png";

import "./Vision.css"

function Vision(props) {
  return (
    <div className="vision">
        <a id="vision"/>
      <div className="vision-hr"/>
      <h2 className="vision-title">Our Vision</h2>
      <p className="vision-text">
        Endowl was founded with a vision of
        <span className="vision-text-emphasis"> security </span>
        for
        <span className="vision-text-emphasis"> personal empowerment </span>
        over your future
        <span className="vision-text-emphasis"> family wealth</span>
        . We are obsessed with making an easy &amp; secure process for you to bequeath your digital estate, securities, and cryptocurrencies to your family during unforeseen circumstances. No longer will the estate planning process for your digital world be one of confusion, delays and loss. Endowl helps you explore who and what is important to you, then create and maintain a plan for how they will be taken care of when you are gone using
        <span className="vision-text-emphasis"> Smart Estate Planning</span>. Take control of how you will be remembered and let us help get your digital legacy in the right hands, yours!
      </p>
      {/* <a className="vision-link">
        <div className="vision-button">Learn More</div>
      </a> */}
      <img className="vision-image" src={chain}/>
      {/* <img className="vision-mascot" src={mascot}/> */}
    </div>
  );
}

export default Vision
