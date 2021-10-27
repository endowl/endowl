import BetaForm from "../BetaForm";
import Social from "../Social";

import facebook from "../../images/Facebook.png";
import twitter from "../../images/Twitter.png";
import instagram from "../../images/Instagram.png";
import github from "../../images/Github.png";
import youtube from "../../images/YouTube.png";

import "./Contact.css";

function Contact(props){
  return(
    <div className="contact">

      <div className="contact-title-wrapper">
        <img className="contact-image" src={props.img}/>
        <h4 className="contact-title">We'd love to hear from you!</h4>
      </div>

      <p className="contact-instructions">Sign up to get invited to the private beta! Limited spots available! And as always, we respect your privacy.</p>

      <BetaForm />

      <div className="contact-social-wrapper">
      <Social
        images={[github, facebook, twitter, instagram, youtube]}
        links={["https://github.com/endowl", "https://www.facebook.com/EndowlApp/", "https://twitter.com/EndowlApp", "https://www.instagram.com/endowlapp/", "https://www.youtube.com/channel/UCu_FwgBtP05Zfe7xix4C7zQ"]}
      />
      </div>
    </div>
  )
}

export default Contact