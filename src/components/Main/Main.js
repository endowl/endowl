import * as React from 'react';

import Contact from "../Contact";
import Features from "../Features";
import FeatureItem from "../FeatureItem";
import Hero from "../Hero";
import News from "../News";
import NewsItem from "../NewsItem";
import Product from "../Product";
import Sponsors from "../Sponsors";
import Store from "../Store";
import Team from "../Team";
import TeamBio from "../TeamBio";
import Vision from "../Vision";

import fg1 from "../../images/FG1.jpeg";
import dc1 from "../../images/DC1.jpeg";
import crypto1 from "../../images/Crypto1.jpeg";
import bwl1 from "../../images/BWL1.jpeg";
import feat1 from "../../images/Feat1.jpeg";
import feat2 from "../../images/Feat2.jpeg";
import feat3 from "../../images/Feat3.jpeg";
import owlfred from "../../images/MeetOwlfred.png";
import aaron from "../../images/Aaron.jpeg";
import ken from "../../images/Ken.jpeg";
import morgan from "../../images/Morgan.jpeg";
import logo from "../../images/Logo.png";
import swag from "../../images/Swag.jpeg";

import filecoin from "../../images/Filecoin.png";
import consensys from "../../images/Consensys.png";
import fairmint from "../../images/Fairmint.png";

import "./Main.css"

function Main(props) {
  return (
    <div className="main">
      <a id="home" />
      <Hero />

      <News >
        <NewsItem img={fg1} headline={"Future Generations"}/>
        <NewsItem img={dc1} headline={"Digital Content"}/>
        <NewsItem img={crypto1} headline={"Cryptocurrency"}/>
        <NewsItem img={bwl1} headline={"Built with ❤️"}/>
      </News>

      <Vision />

      <Product />

      <Features img={owlfred} >
        <FeatureItem
          img={feat1}
          title={"Planning your legacy."}
          content={"Effective Smart Estate Plans are living documents that need to be tuned up as quickly as life changes. Having an up-to-date plan for your endowment will provide benefits for generations to come. Enjoy these benefits when you choose Endowl:\n\n* Frictionless notarization\n* Referral to professionals\n* Notification to parties of the estate\n* Detection and confirmation of death.\n* Secure transfer of digital assets."}
        />
        <FeatureItem
          img={feat2}
          title={"The power of you."}
          content={"At Endowl, we provide the tools to empower individuals to take control of their digital estate plan. Manage the full cycle of your will with our friendly discovery process. Quickly & easily inventory your digital assets, create documents for your estate, have notaries come directly to you, and easily secure updates for your digital asset inheritance while we monitor data sources using our life monitoring oracle, all with no need to pay for an attorney. "}
        />
        <FeatureItem
          img={feat3}
          title={"At your own pace."}
          content={"Finding the time to start and plan an estate plan can be an inconvenience to our daily activities. Our founders understand this and have simplified the process so as to have a high impact on your estate plan without interrupting your day-to-day work and life schedules.\n\nBuild the Smart Estate plan that is right for you on your time, at your own pace. Create and modify it at your convenience by quickly being able to inventory assets, make changes, and then communicate your wishes with your loved ones using our mobile app.  "}
        />
      </Features>

      <Team >
        <TeamBio 
          img={ken}
          name={"Ken Hodler"}
          title={"CEO"}
          content={"Ken was the CTO and an early contributor at KeepKey. He brings over 30 years of experience as a software engineer and entrepreneur and almost 10 years experience with blockchain technology to Endowl."}/>
        <TeamBio
          img={morgan} 
          name={"Morgan Sherwood"}
          title={"CTO"}
          content={"Morgan is a dApp engineer, algorithmic trader, and lifelong developer skilled in Python and smart contract security analysis."}/>
        <TeamBio
          img={aaron}
          name={"Aaron Anderson"}
          title={"CBDO"}
          content={"Aaron brings dApps to market as a dApp engineer, cofounder of Ching! point of sale, and cofounder of web3devs, all companies in the blockchain industry."}/>
      </Team>

      <Sponsors logos={[filecoin, consensys, fairmint]} />

      <a id="contact"/>
      <div className="multimedia">
        <Contact img={logo} />

        <Store img={swag} />
      </div>

    </div>
  );
}

export default Main