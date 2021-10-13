import appStore from "../../images/AppleStore.png";
import googlePlay from "../../images/GooglePlay.png";
import RightArrow from "../../svg/right-arrow.jsx";
// Hero image is included in "./Hero.css" //

import "./Hero.css";
import {HashLink} from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -94; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Hero(props) {
  return (
    <div className="hero-image">
      <div className="hero-text">

        <h1 className="hero-text-h1">
          <span className="hero-text-h1-primary">Tell your story. Preserve your </span>
          <span className="hero-text-h1-emphasis">legacy</span>
          <span className="hero-text-h1-primary">.</span>
        </h1>

        <div className="hero-cta">
          <HashLink smooth to={"/#contact"} scroll={scrollWithOffset}>
          <div className="hero-cta-text">
              Sign up today!
              <div className="hero-cta-image">
                <RightArrow/>
              </div>
            </div>
          </HashLink>
        </div>

      </div>
    </div>
  );
}

export default Hero