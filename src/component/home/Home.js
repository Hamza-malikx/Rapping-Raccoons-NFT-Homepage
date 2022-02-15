import React, { useState } from "react";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import banner from "../../images/Group 1328@2x.png";
import discord from "../../images/Group 1333@2x.png";
import twitter from "../../images/Group 1332@2x.png";
import buyImg from "../../images/ezgif.com-gif-maker(2).gif";
import mintNow from "../../images/Group 1334@2x.png";
import enterImg from "../../images/Group 1327@2x.png";
import charImg from "../../images/Group 1329@2x.png";
import winterImg from "../../images/ezgif.com-gif-maker(3).gif";
import roadMapLogo from "../../images/Group 1744.png";
import roadMapD from "../../images/droadMap.png";
import roadMapM from "../../images/Group 1743@2x.png";
import img52 from "../../images/52@2x.png";
import img83 from "../../images/83@2x.png";
import img831 from "../../images/382.png";
import img125 from "../../images/125@2x.png";
import img1251 from "../../images/3456.png";
import img153 from "../../images/153@2x.png";
import FooterLogo from "../../images/Group 1751@2x.png";
import Accordion from "react-bootstrap/Accordion";
import downDown from "../../images/Group 1338@2x.png";
const Home = () => {
  const [state, setState] = useState(1);
  const down = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      setState(state);
    }
  };
  const up = () => {
    setState(state + 1);
  };
  return (
    <div className="homeSect1">
      <div className="wrapper">
        {/* <!-- Header Start --> */}
        {/* <header>
        </header> */}
        {/* <!-- Header Start --> */}

        {/* <!-- Banner Start --> */}
        <div className="banner" id="mint">
          <img src={banner} alt="" />
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Contant Start --> */}
        <div className="content">
          <section className="intro-wrap" id="aboutSect">
            <div className="container">
              <div className="intro-content">
                <h2>INTRODUCING THE RAPPING RACCOONS</h2>
                <p>
                  Rapping Raccoons is a collection of 5,000 of the coolest music
                  superstars in the Metaverse, hanging out on the Ethereum
                  blockchain. Randomly generated from over one hundred
                  hand-drawn traits, your Rapping Raccoon is poised and ready to
                  become the hottest new talent in the Meta-Music industry. Each
                  Rapping Raccoon is unique, some have extra rare traits which
                  will offer an advantage once our plans for the Rapping
                  Raccoons are revealed.
                  <br /> Be part of this historical Meta-Music event, with the
                  chance to $WIN BIG$, and become the
                  <br /> first-ever Rapping Raccoon Super Star, in the
                  Metaverse.
                </p>
                <h6>
                  Rapping Raccoons offer you a shot at Meta-Fame and fortune!
                </h6>
                <div className="prize-won">
                  <h2>$500,000 IN PRIZES TO BE WON</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={discord} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={twitter} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="buy-your-wrap" id="buy">
            <div className="container">
              <div className="buy-your-content">
                <h2>BUY YOUR RAPPING RACCOON</h2>
                <div className="buy-your-row">
                  <img src={buyImg} alt="" />
                  <div className="buy-your-inner">
                    <ul>
                      <li>
                        Total supply: <b>5,000 NFT’s</b>
                      </li>
                      <li>
                        Minted: <b>0 NFT’s</b>
                      </li>
                      <li>
                        Price per NFT: <b>0.0888 ETH + gas fees</b>
                      </li>
                      <li>
                        Public sale available: <b>01.03.2022</b>{" "}
                      </li>
                      <li>
                        Max allowed: <b>3</b>
                      </li>
                    </ul>
                    <div className="input-counter">
                      <button
                        id="down"
                        className="btn btn-default"
                        onClick={down}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="myNumber"
                        className="form-control input-number"
                        value={state < 10 ? "0" + state : state}
                        np
                      />
                      <button id="up" className="btn btn-default" onClick={up}>
                        +
                      </button>
                    </div>
                    <button type="button">
                      <img src={mintNow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="enter-wrap">
            <img src={enterImg} alt="" />
            <a href="#" className="enter-link">
              enter
            </a>
          </section>
          <section className="battle-begin-wrap">
            <div className="container">
              <div className="battle-begin-content">
                <h2>LET THE BATTLE BEGIN</h2>
                <p>
                  The RACCOON RAVE Club (RRC) is where it’s all going to go
                  down. The RRC will host the first-ever annual “Meta-Fame”
                  Rapping Raccoon battle, witness the most awesome Rapping
                  Raccoons, or their “Proxy” perform live. Some lucky and
                  incredibly talented Raccoons will win and win big! With
                  $500,000 in prizes to be won. All Rapping Raccoons vote on who
                  will be named the first-ever “Meta-Fame Rapping Raccoon” in
                  the Metaverse. With a $300,000 first-place prize going to the
                  winning Rapping Raccoon and $10,000 going to each of the
                  finalist, making this the hottest competition in the
                  Metaverse!
                </p>
                <h6>
                  The evolution of entertainment, for the next generation!
                </h6>
              </div>
            </div>
          </section>
          <section className="meta-fame-chart-wrap">
            <div className="container">
              <div className="meta-fame-chart-content">
                <img src={charImg} alt="" />
                <h2>META-FAME BILLBOARD CHART</h2>
                <p>
                  Rapping Raccoon’s attract “followers” to improve their chance
                  of winning. Each time a Raccoon gets “followed” their ranking
                  goes up on the “Meta-Fame Billboard Chart”. The lucky Raccoons
                  with rare traits will get a “Golden Follower” that is equal to
                  one hundred bonus followers, giving them a head start over
                  their Raccoon rivals. The 20 Finalists will be made up of the
                  top 10 ranked Raccoons on the Meta-Fame Billboard Chart, along
                  with 10 Raccoons randomly selected from the top 1000 ranked
                  Raccoons. Rapping Raccoons will have 99 days from when the
                  competition begins to gain their “followers”. On the 100th
                  day, the 20 finalists will be announced and the countdown to
                  the battle begins.
                </p>
                <h6>
                  Finalists will have 1738 hours to prepare or find their
                  “Proxy”, before the battle.
                </h6>
              </div>
            </div>
          </section>
          <section className="winter-wrap">
            <div className="container">
              <div className="winter-content">
                <img src={winterImg} alt="" />
                <h2>THE WINNER</h2>
                <p>
                  The winner will be decided by the Rapping Raccoons, 4,990
                  Rapping Raccoons will each get 1 vote, the 10 Raccoons with
                  the rare trait “1738” will get 50 votes. In addition, the most
                  liked performance on YouTube will receive 1098 extra votes,
                  totalling a possible 6588 votes. The Rapping Raccoon that
                  receives the most votes will win the 300k first prize and be
                  named “Meta-Music Rapping Raccoon of the year”. All 20
                  finalists will be immortalized on the RRC “wall of fame”, with
                  the winning Raccoon getting their own star on the “walk of
                  fame” club entrance.
                  <br /> The winning performance clip will become an NFT and be
                  auctioned, with all funds raised going to the
                  <br /> winning Raccoon’s Charity of choice.
                </p>
                <h6>
                  If you had, one shot, or one opportunity, to seize everything
                  you ever wanted, in one moment, would you capture it, or just
                  let it slip? “Eminem”
                </h6>
              </div>
            </div>
          </section>
          <div className="road-map-wrap" id="map">
            <img src={roadMapLogo} className="roadmap-logo-mobile" alt="" />

            <div className="wrap-wrap">
              <div className="row-map-w">
                <div className="row-map-c">
                  <div className="road-map-col ">
                    <h4>STAGE 01</h4>
                    <ul>
                      <li>
                        The creation of 5,000 unique Rapping Raccoons NFT’s
                      </li>
                      <li>
                        Discord and Social media deployment to begin Sniper
                      </li>
                      <li>Launch preliminary Rapping Raccoon website Rarity</li>
                      <li>Commence marketing campaign</li>
                      <li>Grow twitter to over 30k followers</li>
                      <li>White-list selection process announced </li>
                      <li>List on Rarity Sniper</li>
                    </ul>
                    <div>
                      <img src={downDown} alt="" className="downDown" />
                    </div>
                  </div>
                </div>
                <div className="row-map-c st-ag-ag">
                  <div className="road-map-col">
                    <h4>STAGE 05</h4>
                    <ul>
                      <li>
                        The winning performance to be turned into an NFT, and
                        auctioned off for charity
                      </li>
                      <li>Build the Raccoon Rave club in the Metaverse</li>
                      <li>
                        The winner will get a star on the RRC “Walk of Fame”
                      </li>
                      <li>
                        All Raccoon finalists will be immortalized at the RRC
                      </li>
                      <li>Raccoons are free again to attract more followers</li>
                      <li>Details of our next competition will be announced</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row-map-w1 ">
                <div className="row-map-c1 st2">
                  <div className="road-map-col1 cc">
                    <h4>STAGE 02</h4>
                    <ul>
                      <li>Launch private sale for VIP White-list members</li>
                      <li>Release date of public sale will be announced •</li>
                      <li>Activate the Rapping Raccoon YouTube channel</li>
                      <li>Give away promotion to be laid out</li>
                      <li>Sell out 80% of Rapping Raccoons</li>
                      <li>Competition countdown to start</li>
                      <li>Unveiling of the Meta-Fame Billboard Chart</li>
                    </ul>
                    <div>
                      <img src={downDown} alt="" className=" imgSt2" />
                    </div>
                  </div>
                </div>
                <div className="row-map-c1 st2">
                  <div className="road-map-col1 cc">
                    <h4>STAGE 03</h4>
                    <ul>
                      <li>Competition countdown finishes</li>
                      <li>The ten highest-ranked Raccoons become finalists</li>
                      <li>The final ten random finalists will be drawn</li>
                      <li>The 1738-hour countdown to the battle begins</li>
                      <li>Increase marketing campaign for the live battles</li>
                      <li>Secure major corporate sponsor</li>
                      <li>Merchandise reveal and giveaway</li>
                    </ul>
                    <div>
                      <img src={downDown} alt="" className=" imgSt2" />
                    </div>
                  </div>
                </div>
                <div className="row-map-c">
                  <div className="road-map-col cc">
                    <h4>STAGE 04</h4>
                    <ul>
                      <li>All “Proxy” performers to be revealed</li>
                      <li>The 1738 hr countdown ends and the battles begin</li>
                      <li>The 20 Finalists performances are live streamed</li>
                      <li>Finalists’ performances uploaded to YouTube</li>
                      <li>Rapping Raccoons cast their vote, for all to see</li>
                      <li>
                        Public will have 7 days to vote, via YouTube likes
                      </li>
                      <li>Winners announced and prize money distributed</li>
                    </ul>
                    <div>
                      <img src={downDown} alt="" className="downDown3" />
                    </div>
                  </div>
                </div>
                <div className="row-map-c st-ag">
                  <div className="road-map-col cc">
                    <h4>STAGE 05</h4>
                    <ul>
                      <li>
                        The winning performance to be turned into an NFT, and
                        auctioned off for charity
                      </li>
                      <li>Build the Raccoon Rave club in the Metaverse</li>
                      <li>
                        The winner will get a star on the RRC “Walk of Fame”
                      </li>
                      <li>
                        All Raccoon finalists will be immortalized at the RRC
                      </li>
                      <li>Raccoons are free again to attract more followers</li>
                      <li>Details of our next competition will be announced</li>
                    </ul>
                    <div>
                      <img src={downDown} alt="" className="downDown3 llg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src={roadMapD} className="roadmap-desktop" alt="" />
            <img src={roadMapM} className="roadmap-mobile" alt="" /> */}
          </div>
          <section className="faqs-wrap" id="usage">
            <div className="container">
              <div className="faqs-content">
                <h2>I’M SURE YOU HAVE LOTS OF QUESTIONS</h2>
                <div className="acca">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        WHEN DOES THE COMPETITON OFFICIALLY START?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        HOW ARE THE FINALISTS CHOSEN?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        WHAT IS A META-FAME BILLBOARD CHARTS?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        WHY DO I NEED TO ATTRACT FOLLOWS?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        HOW DO I GET FOLLOWERS?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        HOW DO PEOPLE FOLLOW THE RACCOONS?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        WHAT HAPPENS IF I OWN MORE THAN ONE RACCOON?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        CAN FINALISTS SELL THEIR RAPPING RACCOONS?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        DO THE FINALISTS HAVE TIME TO PREPARE FOR THE BATTLE?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                        CAN FINALISTS GET ANYONE THEY WANT TO PERFORM IN THEIR
                        PLACE?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                      <Accordion.Header>
                        DO THE CREATERS HAVE A RAPPING RACCOON IN THE
                        COMPETITION?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                        IF I WIN, HOW DO I GET MY PRIZE ?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                      <Accordion.Header>
                        CAN I SPONSER THIS EVENT?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                      <Accordion.Header>
                        WHAT HAPPENS TO MY RACCOON AFTER THE COMPETITION?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once 80% of the Rapping Raccoons are sold the
                        competitions will officially start. The Rapping Raccoon
                        holders will have 99 days to attract “followers” to
                        their Rapping Raccoon, on the 100th day Raccoons will
                        not be able to add any additional followers, for this
                        competition. The official countdown clock will be
                        displayed on Rapping Raccoon website.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
          <section className="family-wrap" id="team">
            <div className="container">
              <div className="family-content">
                <h2>THE FAMILY</h2>
                <div className="family-content-row row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img52} alt="" />
                        <h4>DADDY-A</h4>
                        <h5>Cofounder / Operations</h5>
                        <p>
                          Known for his ideas and creative mind, mo importantly
                          importantly he knows how to get shit do n+ owning &
                          owning & running companies.
                        </p>
                        <span>Junior J ’s dad , mentor and wallet.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img83} alt="" />
                        <h4>JUNIOR- J</h4>
                        <h5>Cofounder / Jr Promoter</h5>
                        <p>
                          14 years old kid, with more connection then Donald
                          Trump. Lives and breaths all things NFT’s and
                          metaverse related.
                        </p>
                        <span>Daddy-A’s reason to live</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img125} alt="" />
                        <h4>BIG MUMMA</h4>
                        <h5>Marketing</h5>
                        <p>
                          She can talk underwater, 20+ years running sales and
                          marketing teams across multiple industries, Never
                          takes no for an answer!
                        </p>
                        <span>Daddy-A’s ball and chain</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img153} alt="" />
                        <h4>BUBBA- E</h4>
                        <h5>AKA Gossip Girl</h5>
                        <p>
                          With her finger firmly on the pulse of all things
                          social, discovering events, trends and hot new talent
                          is her specialty.
                        </p>
                        <span>Big Mumma’s pet project</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img831} alt="" />
                        <h4>BRAINS TRUST</h4>
                        <h5>Tech Head</h5>
                        <p>
                          Lead developer, with over 15 years experience in
                          software development across multiple platforms, h our
                          our go to man for all things tech.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    //
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img1251} alt="" />
                        <h4>LOW KEY</h4>
                        <h5>Graphic Artist</h5>
                        <p>
                          Likes to keep a low profile, he has been a
                          professional graphic designer for more than 5 years,
                          we call him the creative genius.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Contant End --> */}
        <footer>
          <div className="container">
            <div className="footer-content">
              <a href="#" className="footer-logo">
                RAPPING RACCOONS
              </a>
              <a href="#" className="footer-logo-m">
                <img src={FooterLogo} alt="" />
              </a>
              <p>
                &copy; 2021 <a href="#">RAPPING RACCOONS</a>, ALL RIGHTS
                RESERVED.
              </p>
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <ul className="footer-link">
                <li>
                  <a href="#">OpenSea</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Etherscan</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
