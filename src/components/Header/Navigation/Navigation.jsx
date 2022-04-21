import React from "react";
import { NavigationContainer } from "../../../styles/Header/Navigation/Navigation.styled";

import RFALogo from "../../../assets/RFALogoFinal.png";
import searchIcon from "../../../assets/searchIcon.svg";
import menuIconIsOpened from "../../../assets/menuIcon.svg";
import menuIconIsClosed from "../../../assets/menuIconClose.svg";

export const Navigation = (props) => {
  const onMenuClick = () => {
    props.setNavigationIsExtended((prev) => !prev);
  };

  return (
    <NavigationContainer>
      <div className="nav-left">
        <button className="menu" onClick={onMenuClick}>
          <img
            src={
              props.navigationIsExtended ? menuIconIsClosed : menuIconIsOpened
            }
            alt="menu icon open"
          />
          <span className="menu__text">
            {props.navigationIsExtended ? "Close" : "Menu"}
          </span>
        </button>
        <div className="company">
          <a className="company__logo" href="/">
            <img src={RFALogo} alt="scrfa logo" />
          </a>
          <div className="company__name">
            <div className="company__name--top">South Carolina</div>
            <div className="company__name--bottom">
              Revenue and Fiscal Affairs
            </div>
            <div className="company__tagline">
              Transforming data into solutions for South Carolina
            </div>
          </div>
        </div>
      </div>
      <div className="general-menu">
        <ul className="general-menu__list">
          <li className="general-menu__list-item">
            <a href="">About Us</a>
          </li>
          <li className="general-menu__list-item">
            <a href="">Events</a>
          </li>
          <li className="general-menu__list-item">
            <a href="">Boards & Committees</a>
          </li>
        </ul>
        <div className="search">
          <button className="search__button">
            <img
              className="search__button-image"
              src={searchIcon}
              alt="search-icon"
            />
          </button>
        </div>
      </div>
    </NavigationContainer>
  );
};
