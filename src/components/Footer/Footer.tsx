import React from "react";
import footerLogo from "../../assets/FooterLogo.png";
import certificate from "../../assets/sertificate.png";
import facebook from "../../assets/Facebook .svg";
import twitter from "../../assets/Twitter.svg";
import insta from "../../assets/instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-general">
        <div className="footer-logo">
          <img src={footerLogo} alt="Footer-logo" />
        </div>
        <div className="footer-nav">
          <div className="Links footer-links">
            <h3>Quick links</h3>
            <a href="#">About us</a>
            <a href="#">Bulk order</a>
            <a href="#">Gifts</a>
            <a href="#">Organic Garden</a>
          </div>
          <div className="Legal footer-links">
            <h3>Legal</h3>
            <a href="#">T&C</a>
            <a href="#">Privacy policy</a>
            <a href="#">Returns</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
          </div>
          <div className="Support footer-links">
            <h3>Support</h3>
            <a href="#">FAQs</a>
            <a href="#">Contact us</a>
          </div>
        </div>
        <div className="footer-license">
          <img src={certificate} alt="certificate" />
        </div>
        <div className="footer-contacts">
          <div className="contacts-text">
            <p>
              {" "}
              © 2021 Plan A Plant <br /> All Rights Reserved
            </p>
          </div>
          <div className="footer-icons">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
