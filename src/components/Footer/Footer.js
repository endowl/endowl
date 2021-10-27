import { HashLink } from 'react-router-hash-link';

import "./Footer.css";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -94; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Footer(props) {
  return (
    <footer className="footer">
      
      <div className="footer-hr"/>
      
      <div className="footer-wrapper">

        <div className="footer-contact">
          <div className="footer-contact-title">Contact</div>
          <div className="footer-contact-links">
            <a href="mailto:info@endowl.com" className="footer-contact-links-a">info@endowl.com</a>
            <HashLink smooth to="/#contact" className="footer-contact-links-a" scroll={scrollWithOffset}>Sign up for updates</HashLink>
          </div>
        </div>

        <div className="footer-menu">
          <nav className="footer-menu-navigation">
            <div className="footer-menu-title">Navigation</div>
            <div className="footer-menu-links">
             
              <HashLink smooth to="/#home" className="footer-contact-links-a" scroll={scrollWithOffset}>Home</HashLink>
              <HashLink smooth to="/#vision" className="footer-contact-links-a" scroll={scrollWithOffset}>Vision</HashLink>
              <HashLink smooth to="/#team" className="footer-contact-links-a" scroll={scrollWithOffset}>Team</HashLink>
              <HashLink to="/glossary#" className="footer-contact-links-a">Glossary</HashLink>
              <HashLink to="/privacy" className="footer-contact-links-a">Privacy Notice</HashLink>
              <HashLink to="/terms" className="footer-contact-links-a">Terms of Use</HashLink>

            </div>
          </nav>
          <div className="footer-menu-socials">
            <div className="footer-menu-title">Reach Out</div>
            <div className="footer-menu-links">
            
              <a href="https://twitter.com/EndowlApp" className="footer-contact-links-a">Twitter</a>
              <a href="https://www.facebook.com/EndowlApp/" className="footer-contact-links-a">Facebook</a>
              <a href="https://www.youtube.com/channel/UCu_FwgBtP05Zfe7xix4C7zQ" className="footer-contact-links-a">YouTube</a>
              <a href="https://github.com/endowl" className="footer-contact-links-a">Github</a>
              <a href="https://owlfred-shop.creator-spring.com/" className="footer-contact-links-a">Swag Shop</a>
            
            </div>
          </div>
        </div>

      </div>
      <div className="footer-hr footer-lesser"/>

      <div className="footer-legal">
        <div className="footer-legal-subscribe">Subscribe <a href="https://endowl.com/feed.xml"  className="footer-legal-content-links">via RSS</a></div>
        <div className="footer-legal-content">
          {"Photos by: "}
          <a href="https://unsplash.com/photos/smJ6XsYy8gA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Roberto Nickson</a>
          {", "}
          <a href="https://unsplash.com/photos/smJ6XsYy8gA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Patty Brito</a>
          {", "}
          <a href="https://unsplash.com/photos/smJ6XsYy8gA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Art Rachen</a>
          {", "}
          <a href="https://unsplash.com/photos/0O0gux4OZX4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Jesus Loves Austin</a>
          {", "}
          <a href="https://unsplash.com/photos/Hg3BHX6U5jg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Austin Distel</a>
          {", "}
          <a href="https://unsplash.com/photos/wwjzVnMkRrc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Quaritsch Photography</a>
          {", "}
          <a href="https://unsplash.com/photos/fIq0tET6llw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Diego PH</a>
          {", "}
          <a href="https://unsplash.com/photos/qnt9iigV444?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Jud Mackrill</a>
          {", and "}
          <a href="https://unsplash.com/photos/u181sbSXBmk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="footer-legal-content-links">Isaac Quesada</a>
        </div>
        <div  className="footer-legal-content">  
          {" © 2020 "}
          <a href="https://endowl.com/#home">Endowl</a>
          {"™, Inc. All Rights Reserved."}
          {" Endowl is a Delaware Public Benefit Corporation"}
        </div>
      </div>

    </footer>
  );
}

export default Footer