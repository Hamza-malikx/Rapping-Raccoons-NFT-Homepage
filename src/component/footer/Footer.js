import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../images/Group 1751@2x.png";
import "../../css/style.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-content">
            {/* <a href="#" className="footer-logo">
                RAPPING RACCOONS
              </a> */}
            <Link to="/" className="footer-logo-m">
              <img src={FooterLogo} alt="" />
            </Link>
            <p>
              &copy; 2021 <a href="#">RAPPING RACCOONS</a>, ALL RIGHTS RESERVED.
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
                <Link to="/term-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <a href="#">Etherscan</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
