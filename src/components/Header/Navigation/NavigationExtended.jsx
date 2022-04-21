import React from "react";
import { NavigationExtendedContainer } from "../../../styles/Header/Navigation/NavigationExtended.styled";

export const NavigationExtended = (props) => {
  if (!props.navigationIsExtended) {
    return null;
  }

  return (
    <NavigationExtendedContainer>
      <div className="side-menu">
        <ul className="side-menu__list">
          <li className="side-menu__list-item">
            <a href="">Home</a>
          </li>
          <li className="side-menu__list-item">
            <a href="">News & Events</a>
          </li>
          <li className="side-menu__list-item">
            <a href="">About Us</a>
          </li>
          <li className="side-menu__list-item">
            <a href="">Contact Us</a>
          </li>
          <li className="side-menu__list-item">
            <a href="">Boards & Committees</a>
          </li>
        </ul>
      </div>
      <div className="robust-menu">
        <div className="robust-menu__section">
          <div className="list-header">Data & Research</div>
          <ul className="robust-menu__list">
            <li className="robust-menu__list-item">Economy</li>
            <li className="robust-menu__list-item">State Finances</li>
            <li className="robust-menu__list-item">Education</li>
            <li className="robust-menu__list-item">Healthcare</li>
            <li className="robust-menu__list-item">Local Government</li>
            <li className="robust-menu__list-item">
              Population and Demographics
            </li>
            <li className="robust-menu__list-item">
              State Register Calculations
            </li>
            <li className="robust-menu__list-item">Presentations</li>
          </ul>
        </div>
        <div className="robust-menu__section">
          <div className="list-header">Geography & Mapping</div>
          <ul className="robust-menu__list">
            <li className="robust-menu__list-item">
              Transportation Carrier Network (Uber)
            </li>
            <li className="robust-menu__list-item">SC Real Time Network</li>
            <li className="robust-menu__list-item">SC State GIS</li>
            <li className="robust-menu__list-item">Maps</li>
            <li className="robust-menu__list-item">Interactive Mapping</li>
            <li className="robust-menu__list-item">Statewide Aerial Imagery</li>
          </ul>
        </div>
        <div className="robust-menu__section">
          <div className="list-header">Programs & Services</div>
          <ul className="robust-menu__list">
            <li className="robust-menu__list-item">
              Precinct Demographics and Redistricting
            </li>
            <li className="robust-menu__list-item">State 911 Program</li>
            <li className="robust-menu__list-item">
              Data Services and Online Solutions
            </li>
            <li className="robust-menu__list-item">Geodetic Survey</li>
            <li className="robust-menu__list-item">Fiscal Analysis</li>
            <li className="robust-menu__list-item">2020 Census</li>
          </ul>
        </div>
        <div className="robust-menu__section">
          <div className="list-header">Legislative Fiscal Impacts</div>
          <ul className="robust-menu__list">
            <li className="robust-menu__list-item">
              Current General Assembly Session
            </li>
            <li className="robust-menu__list-item">
              Previous General Assembly Session
            </li>
          </ul>
        </div>
      </div>
    </NavigationExtendedContainer>
  );
};
