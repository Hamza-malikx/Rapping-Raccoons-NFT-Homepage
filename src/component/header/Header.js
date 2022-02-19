import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import { Link } from "react-router-dom";
import Logo from "../../images/Group 1330@2x.png";
import gr131 from "../../images/Group 1331@2x.png";

const Header = () => {
  const [scrollState, setScrollState] = useState();
  const [hamburger, setHamburger] = useState("false");
  const clickHandler = () => {
    if (hamburger === "true") {
      setHamburger("false");
    } else {
      setHamburger("true");
    }
  };
  const scroll = () => {
    const anchor = document.querySelector("#mint");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToAbout = () => {
    const anchor = document.querySelector("#aboutSect");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    // console.log(anchor);
  };
  const scrollToBuy = () => {
    const anchor = document.querySelector("#buy");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToMap = () => {
    const anchor = document.querySelector("#map");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToTeam = () => {
    const anchor = document.querySelector("#team");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollUsage = () => {
    const anchor = document.querySelector("#usage");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let listener = null;

      listener = document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        setScrollState(scrolled);
      });
    });
  }, [scrollState]);
  return (
    <div>
      <div
        className={styles.header}
        style={
          scrollState > 100
            ? { backgroundColor: "#080010" }
            : { backgroundColor: "#080010" }
        }
      >
        <div className="container">
          <nav className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className={styles.navbar}>
              <ul className={styles.navbarUl}>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/" onClick={scroll}>
                    HOME
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToAbout}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToBuy}
                  >
                    BUY
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToMap}
                  >
                    ROADMAP
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToTeam}
                  >
                    TEAM
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollUsage}
                  >
                    FAQ
                  </Link>
                </li>

                <li className={styles.navbarItems}>
                  <div className={styles.socialLinks}>
                    <div className={styles.socialLinksInner}>
                      <a
                        href="https://discord.gg/gQsCTHAAk5"
                        style={{ color: "#fff" }}
                      >
                        <i className="fab fa-discord"></i>
                      </a>
                    </div>
                    {/* <div className={styles.socialLinksInner}>
                      <a
                        href="https://www.facebook.com/INSANECLOWNPOSSE"
                        style={{ color: "#fff" }}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div> */}
                    <div className={styles.socialLinksInner}>
                      <a
                        href="https://twitter.com/RappingRaccoon?t=s2xAN9nCdIbn98-j5rtYoA&s=09"
                        style={{ color: "#fff" }}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div className={styles.socialLinksInner}>
                      <a
                        href="https://www.instagram.com/rappingraccoon/?hl=enannounced"
                        style={{ color: "#fff" }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    {/* <div className={styles.socialLinksInner}>
                      <a
                        href="https://www.youtube.com/channel/UC1kxQJwhVuZyheS1XKpzAHQ"
                        style={{ color: "#fff" }}
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div> */}
                  </div>
                </li>
              </ul>
              <ul className={styles.hamUl}>
                <li>
                  <label
                    className={
                      hamburger === "false"
                        ? `${styles.humbergButton}`
                        : `${styles.humbergButton}`
                    }
                    onClick={clickHandler}
                  >
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.topbar}`
                          : `${styles.topbarab}`
                      }
                    ></span>
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.middlebar}`
                          : `${styles.middlebarab}`
                      }
                    ></span>
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.bottombar}`
                          : `${styles.bottombarab}`
                      }
                    ></span>
                  </label>
                </li>
              </ul>
              {hamburger === "true" ? (
                <div className={styles.wrapper}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scroll}
                      >
                        HOME
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToAbout}
                      >
                        ABOUT US
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToBuy}
                      >
                        BUY
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToMap}
                      >
                        ROADMAP
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToTeam}
                      >
                        TEAM
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollUsage}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <div className={styles.socialLinks}>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://discord.gg/gQsCTHAAk5"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-discord fa-lg"></i>
                          </a>
                        </div>
                        {/* <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://www.facebook.com/INSANECLOWNPOSSE"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </div> */}
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://twitter.com/RappingRaccoon?t=s2xAN9nCdIbn98-j5rtYoA&s=09"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-twitter fa-lg"></i>
                          </a>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://www.instagram.com/rappingraccoon/?hl=enannounced"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-instagram fa-lg"></i>
                          </a>
                        </div>
                        {/* <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://www.youtube.com/channel/UC1kxQJwhVuZyheS1XKpzAHQ"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div> */}
                      </div>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <button className={styles.connectWalBtn}>
                        Connect Wallet
                      </button>
                      {/* <img src={gr131} alt="" className={styles.btnt} /> */}
                    </li>
                  </ul>
                </div>
              ) : (
                <div className={styles.wrapperab}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        HOME
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        ABOUT US
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        BUY
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        ROADMAP
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        TEAM
                      </Link>
                    </li>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ marginBottom: "5px" }}
                    >
                      <Link className={styles.navbarLink} to="/nft-usage">
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <div className={styles.socialLinks}>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://discord.gg/gQsCTHAAk5"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-discord fa-lg"></i>
                          </a>
                        </div>
                        {/* <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://www.facebook.com/INSANECLOWNPOSSE"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </div> */}
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://twitter.com/RappingRaccoon?t=s2xAN9nCdIbn98-j5rtYoA&s=09"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-twitter fa-lg"></i>
                          </a>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://www.instagram.com/rappingraccoon/?hl=enannounced"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-instagram fa-lg"></i>
                          </a>
                        </div>
                        {/* <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "7px" }}
                        >
                          <a
                            href="https://www.youtube.com/channel/UC1kxQJwhVuZyheS1XKpzAHQ"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div> */}
                      </div>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <button className={styles.connectWalBtn}>
                        Connect Wallet
                      </button>
                      {/* <img src={gr131} alt="" className={styles.btnt} /> */}
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.connectWalBtnWrapper}>
              <button className={styles.connectWalBtn}>Connect Wallet</button>
              {/* <img src={gr131} alt="" className={styles.btnt} /> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
