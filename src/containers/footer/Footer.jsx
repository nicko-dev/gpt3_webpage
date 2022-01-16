import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <div className="gpt3__footer-button">
          <button type="button">Request Early Access</button>
        </div>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container__logo">
          <img src={logo} alt="footer logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-info__links">
          <p>Links</p>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-info__links">
          <p>Company</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-info__links">
          <p>Get in touch</p>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <p className="gpt3__footer-info">© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
