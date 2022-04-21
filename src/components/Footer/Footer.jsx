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
        <p className="location-header">Main Office</p>
        <address>
          1000 Assembly St. Rembert Dennis Building, Suite 421
          <br />
          Columbia, SC 29201
        </address>

        <p className="location-header">Geodetic Survey Section</p>
        <address>
          5 Geology Rd
          <br />
          Columbia, SC 29212
        </address>

        <p className="location-header">Health and Demographic Division</p>
        <address>
          1000 Assembly St. Rembert Dennis Building, Suite 240
          <br />
          Columbia, SC 29201
        </address>
      </div>
    </FooterContainer>
  );
};
