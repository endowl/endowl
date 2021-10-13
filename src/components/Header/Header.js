import logo from "../../images/Logo.png";
import Menu from "../Menu";
import { HashLink } from 'react-router-hash-link';

import "./Header.css";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -94; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Header(props) {
  return (
    <header className="header-wrapper">

    <HashLink smooth to="/#home" scroll={scrollWithOffset}>
      <div className="header-logo">
        <img className="header-logo-image" src={logo}/>
        <div className="header-brand-wrapper"> 
          <div className="header-brand-primary">
            endowl
          </div>
          <div className="header-brand-secondary">
            A Public Benefit Corporatioin
          </div>
        </div>
      </div>
    </HashLink> 

      <div className="header-menu">
        { window.outerWidth < 1026 ?
          <button className="header-menu-button">
            <Menu />
          </button> :
          <div className="header-menu-link-bar">
            <HashLink className="header-menu-hash-link" smooth to="/#home" scroll={scrollWithOffset}>
              <div className="header-menu-links">Home</div>
            </HashLink>
            <HashLink className="header-menu-hash-link" smooth to="/#vision" scroll={scrollWithOffset}>
              <div className="header-menu-links">Our Vision</div>
            </HashLink>
            <HashLink className="header-menu-hash-link" smooth to="/#product" scroll={scrollWithOffset}>
              <div className="header-menu-links">Smart Estate Planning</div>
            </HashLink>  
            <HashLink className="header-menu-hash-link" smooth to="/#team" scroll={scrollWithOffset}>
              <div className="header-menu-links">Team</div>
            </HashLink>  
            <HashLink className="header-menu-hash-link" smooth to="/#contact" scroll={scrollWithOffset}>
              <div className="header-menu-links">Contact</div>
            </HashLink>  
            <a className="header-menu-hash-link" href="https://owlfred-shop.creator-spring.com/">
              <div className="header-menu-links">Swag</div>
            </a>
          </div>
        }
      </div>
    </header>
  );
}

export default Header