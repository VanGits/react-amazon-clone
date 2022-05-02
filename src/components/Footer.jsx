import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import {
  firstFooterContent,
  secondFooterContent,
  thirdFooterContent,
  fourthFooterContent,
} from "../utilities/ProductsData";
const Footer = () => {
  return (
    <footer className="footer">
      <a href="#header">
        <div className="back__to-top">
          <h5>Back to top</h5>
        </div>
      </a>
      <div className="main__footer">
        <div className="main__columns">
          <div className="column">
            {firstFooterContent.map((item, index) => (
              <a className="footer__item noClickFooter">{item}</a>
            ))}
          </div>
          <div className="column">
            {secondFooterContent.map((item, index) => (
              <a className="footer__item noClickFooter">{item}</a>
            ))}
          </div>
          <div className="column">
            {thirdFooterContent.map((item, index) => (
              <a className="footer__item noClickFooter">{item}</a>
            ))}
          </div>
          <div className="column">
            {fourthFooterContent.map((item, index) => (
              <a className="footer__item noClickFooter">{item}</a>
            ))}
          </div>
        </div>
        <hr className="footer__line" />
        <Link to="/">
          <div className="footer__logo-wrapper">
            <img
              className="footer__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </div>
        </Link>
        <div className="footer__copyright">
            <a className="noClickFooter">Conditions of Use</a>
            <a className="noClickFooter">Privacy Notice</a>
            <a className="noClickFooter">Interest-Based Ads</a>
            <p>© 1996-2022, Amazon.com, Inc. (FAKE) or its affiliates</p>
        </div>
        <div className="footer__maker">
            <p>Van Celdran</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
