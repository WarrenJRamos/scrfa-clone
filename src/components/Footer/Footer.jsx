import React from "react";

import RFALogo from "../../assets/RFALogoFooter.png";

import { FooterContainer } from "../../styles/Footer/Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__left">
        <p className="company-name">
          South Carolina
          <br />
          Revenue and Fiscal Affairs Office
        </p>
        <a className="company-logo" href="/">
          <img src={RFALogo} alt="scrfa logo" />
        </a>
      </div>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-list-item">Privacy Statement</li>
          <li className="footer__nav-list-item">FOIA</li>
          <li className="footer__nav-list-item">Disclosures and Reporting</li>
          <li className="footer__nav-list-item">Report Fraud</li>
          <li className="footer__nav-list-item">Accessibility</li>
          <li className="footer__nav-list-item">Contact Us</li>
        </ul>
      </nav>
      <div className="footer__right">
        <p className="location-header">Location</p>
        <address>
          1000 Assembly Street
          <br />
          Rembert Dennis Building, Suite 421
          <br />
          Columbia, SC 29201
          <br />
          (803) 734-3793
          <br />
          <br />
          publicrelations@rfa.sc.gov
        </address>
      </div>
    </FooterContainer>
  );
};
