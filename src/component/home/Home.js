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
import Accordion from "react-bootstrap/Accordion";
import downDown from "../../images/Group 1338@2x.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Home = () => {
  const [state, setState] = useState(1);
  const [mstate, msetState] = useState(false);
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
  const PopUp = () => {
    mstate === false ? msetState(true) : msetState(false);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                      <a href="https://discord.gg/gQsCTHAAk5">
                        <img src={discord} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/RappingRaccoon?t=s2xAN9nCdIbn98-j5rtYoA&s=09">
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
                        Price per NFT: <b>0.16 ETH + gas fees</b>
                      </li>
                      <li>
                        Public sale available: <b>##/##/####</b>{" "}
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
            <a href="#" className="enter-link" onClick={handleShow}>
              enter
            </a>
          </section>
          {/* {mstate === true ? ( */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Rapping Raccoons</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Raccoon Rave currently under construction, coming soon
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
          </Modal>
          {/* ) : null} */}

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
                  Rapping Raccoons attract “followers” to improve their chance
                  of winning. Each time a Raccoon is “followed” their ranking
                  goes up on the “Meta-Fame Billboard Chart”. The lucky Raccoons
                  with rare traits will receive a “Golden Follower” that is
                  equal to three hundred bonus followers, giving them a head
                  start over their Raccoon rivals. The 20 Finalists will be made
                  up of the top 20 ranked Raccoons on the Meta-Fame Billboard
                  Chart. Rapping Raccoons will have 99 days from when the
                  competition begins to gain their “followers”. On the 100th
                  day, the 20 finalists will be announced and the countdown to
                  the battle begins.
                </p>
                <h6>
                  Finalists will have 1,738 hours to prepare or find their
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
                  the rare trait “1738” will have 50 votes. In addition, the
                  most liked performance on YouTube will receive 1098 extra
                  votes, totalling a possible 6588 votes. The Rapping Raccoon
                  that receives the most votes will win the $300,000 first prize
                  and and be named “Meta-Music Rapping Raccoon of the year”. All
                  20 finalists will be immortalized on the RRC “wall of fame”,
                  with the winning Raccoon getting their own star on the “walk
                  of fame” club entrance.
                  <br /> The winning performance clip will become an NFT and
                  sold, with all funds raised going to the
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
                      <li>Creation of 5,000 unique Rapping Raccoons NFT’s</li>
                      <li>Discord and Social media deployment to start</li>
                      <li>Launch preliminary Rapping Raccoon website</li>
                      <li>Commence intense marketing campaign</li>
                      {/* <li>Grow twitter to over 30k followers</li> */}
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
                      <li>Winners announced, prize money distributed</li>
                      <li>Winning performance sold as an NFT, for charity</li>
                      <li>Build the Raccoon Rave club in the Metaverse</li>
                      <li>Winner get's a star on the RRC “Walk of Fame”</li>
                      <li>Details of our next battle will be announced</li>
                      <li>Raccoons are free to attract more followers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row-map-w1 ">
                <div className="row-map-c1 st2">
                  <div className="road-map-col1 cc ccx">
                    <h4>STAGE 02</h4>
                    <ul>
                      <li>Launch private sale for White-list members</li>
                      <li>Release date of public sale to be announced</li>
                      <li>Initiate the Rapping Raccoon YouTube channel</li>
                      {/* <li>Give away promotion to be laid out</li> */}
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
                      <li>Competition countdown ends</li>
                      <li>20 highest-ranked Raccoons become finalists</li>
                      {/* <li>The final ten random finalists will be drawn</li> */}
                      <li>1738-hour countdown to the battle begins</li>
                      <li>Promotion for the live battles starts</li>
                      <li>Secure major corporate sponsor</li>
                      <li>Merchandise reveals and giveaway</li>
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
                      <li>The “Proxy” performers are revealed</li>
                      <li>1738hr countdown ends, battles start</li>
                      <li>Finalists’ performances to be live-streamed</li>
                      <li>Performances uploaded to YouTube</li>
                      <li>Rapping Raccoons cast their vote</li>
                      <li>The public have 7 days to vote on YouTube</li>
                      {/* <li>Winners announced and prize money distributed</li> */}
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
                      <li>Winners announced, prize money distributed</li>
                      <li>Winning performance sold as an NFT, for charity</li>
                      <li>Build the Raccoon Rave club in the Metaverse</li>
                      <li>Winner get's a star on the RRC “Walk of Fame”</li>
                      <li>Details of our next battle will be announced</li>
                      <li>Raccoons are free to attract more followers</li>
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
                        Once 80% (4,000) of the Rapping Raccoons are sold, the
                        competition will officially begin. The official
                        countdown clock will be displayed on the Rapping Raccoon
                        website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        HOW ARE THE FINALISTS CHOSEN?
                      </Accordion.Header>
                      <Accordion.Body>
                        The top 20 ranked Rapping Raccoons on the Meta-Fame
                        Billboard Chart become the finalists.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        WHAT'S THE META-FAME BILLBOARD ?
                      </Accordion.Header>
                      <Accordion.Body>
                        The Meta-Fame Billboard Chart is where all Rapping
                        Raccoons are ranked from highest to lowest based on the
                        number of "followers" they have attracted.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        WHY DO I NEED TO ATTRACT FOLLOWERS?
                      </Accordion.Header>
                      <Accordion.Body>
                        We want to grow the Rapping Raccoons and the NFT
                        community as large and as fast as possible, what better
                        way to grow than by introducing new people into the NFT
                        space. Our goal is to invite over 5 million followers to
                        our event, bringing fame, fortune, and a future to our
                        Rapping Raccoon community.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        HOW DO I GET FOLLOWERS?
                      </Accordion.Header>
                      <Accordion.Body>
                        Rapping Raccoons come with "100 virtual followers" and
                        the Raccoons with rare traits will come with “300
                        virtual followers”. From there It will be up to each
                        individual Rapping Raccoon to use their promotional
                        skills to attract additional followers to their Rapping
                        Raccoon.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        HOW DO PEOPLE FOLLOW THE RACCOONS?
                      </Accordion.Header>
                      <Accordion.Body>
                        They will need to go to the Raccoon Rave Club website
                        and select the Rapping Raccoon they would like to follow
                        from the Meta-Fame Billboard Chart, and click follow,
                        its that easy. Followers will be verified, via one of
                        their social media or discord account.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        WHAT HAPPENS IF I OWN MORE THAN ONE RACCOON?
                      </Accordion.Header>
                      <Accordion.Body>
                        Followers can be transferred from one Rapping Raccoon to
                        another, if they are owned by the same person. Example:
                        If you own a Raccoon with 1,000 followers and you buy
                        another Rapping Raccoon that has 500 followers you can
                        move all the followers to the one Raccoon, effectively
                        ending up with one Raccoon having 1,500 followers and
                        the other having zero.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        WHAT HAPPENS IF I SELL MY RACCOON BEFORE THE
                        COMPETITION?
                      </Accordion.Header>
                      <Accordion.Body>
                        Your Rapping Raccoons Meta-Fame Billboard ranking at the
                        time of sale remains the same for the new owner.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        CAN FINALISTS SELL THEIR RAPPING RACCOONS?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, you can sell your Rapping Raccoon at any time to
                        anybody, up until it’s your turn to perform.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                        DO THE FINALISTS HAVE TIME TO PREPARE FOR THE BATTLE?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once the finalists are announced they will have 1,738
                        hours to prepare, or to name a "Proxy" who will perform
                        on their behalf.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                      <Accordion.Header>
                        CAN FINALISTS GET ANYONE THEY WANT TO PERFORM IN THEIR
                        PLACE?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, they can nominate any "PROXY" they like, who is
                        willing to perform on their behalf.
                        <p>
                          If you find yourself in the final and have no musical
                          talent you better find someone that does, or it’s
                          going to be brutal.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                        WHO CHOOSES THE WINNING PERFORMANCE?
                      </Accordion.Header>
                      <Accordion.Body>
                        4,990 Rapping Raccoons each get 1 vote, the 10 Raccoons
                        with the rare trait 1738 have 50 votes each. In
                        addition, all 20 performances will be uploaded to our
                        YouTube channel, the most liked performance (within
                        7days of the competition) will receive 1,098 extra
                        votes, totalling a possible 6588 votes. The Rapping
                        Raccoon with the most votes wins. Votes will be openly
                        displayed for all to see.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                      <Accordion.Header>
                        DO THE CREATERS HAVE A RAPPING RACCOON IN THE
                        COMPETITION?
                      </Accordion.Header>
                      <Accordion.Body>
                        ABSOLUTELY NOT!{" "}
                        <p>
                          The creators of this NFT collection do not have any
                          Rapping Raccoons in the contest, all 5,000 Rapping
                          Raccoons are up for grabs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                      <Accordion.Header>
                        IF I WIN, HOW DO I GET MY PRIZE ?
                      </Accordion.Header>
                      <Accordion.Body>
                        All prize money will be transferred in ETH directly into
                        your ETH wallet as soon as the competition has been
                        officially decided.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="14">
                      <Accordion.Header>
                        CAN I SPONSER THIS EVENT?
                      </Accordion.Header>
                      <Accordion.Body>
                        YES,
                        <p>
                          We are actively pursuing sponsors for this event and
                          future competitions. Please contact us if you would
                          like to be a part of this historical Meta-Music event.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="15">
                      <Accordion.Header>
                        WHAT HAPPENS TO MY RACCOON AFTER THE COMPETITION?
                      </Accordion.Header>
                      <Accordion.Body>
                        Our Vision,
                        <p>
                          After this competition ends, the Meta-Fame Billboard
                          Chart will be unfrozen, and the Rapping Raccoons can
                          continue to add more followers to their Rapping
                          Raccoons profile.
                        </p>
                        <p>
                          {" "}
                          Our goal is to run the competition again next year. We
                          hope to attract a major corporate sponsor to help
                          support future events.
                        </p>
                        <p>
                          We are looking to purchase or lease land in the
                          Metaverse and start building the Raccoon Rave club
                          ASAP, for all Rapping Raccoons and their followers to
                          enjoy!
                        </p>
                        <p>Stay tuned more to come on this soon.</p>
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
                        <h4>DADDY-O</h4>
                        <h5>Cofounder / Operations</h5>
                        <p>
                          Known for his ideas and creative mind, most
                          importantly importantly he knows how to get shit done.
                          Twenty-plus years owning & running companies.
                        </p>
                        {/* <span>Junior J ’s dad , mentor and wallet.</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img83} alt="" />
                        <h4>WIZZ KID</h4>
                        <h5>Cofounder / Promoter</h5>
                        <p>
                          16-years-old kid, with more connections then Donald
                          Trump. Lives and breaths all things NFT’s and
                          metaverse related.
                        </p>
                        {/* <span>Daddy-A’s reason to live</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img125} alt="" />
                        <h4>NO NO'S</h4>
                        <h5>Marketing / Negotiator</h5>
                        <p>
                          She can talk underwater, Twenty-Plus years running
                          sales and marketing teams across multiple industries,
                          Never takes no for an answer!
                        </p>
                        {/* <span>Daddy-A’s ball and chain</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div
                    // className="family-content-col"
                    >
                      <div className="family-content-inner">
                        <img src={img153} alt="" />
                        <h4>BUBBA - AKA GOSSIP GIRL</h4>
                        <h5>Social Media Expert</h5>
                        <p>
                          With her finger firmly on the pulse of all things
                          social, discovering events, trends and hot new talent
                          is her specialty.
                        </p>
                        {/* <span>Big Mumma’s pet project</span> */}
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
                          Lead software engineer, with over 15 years’ experience
                          in software development across multiple platforms, our
                          go to man for all things tech.
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
                          professional graphic designer for over 8 years, we
                          call him the creative genius.
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
      </div>
    </div>
  );
};

export default Home;
