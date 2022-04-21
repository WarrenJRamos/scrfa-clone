import React from "react";
import { NavigationExtendedContainer } from "../../../styles/Header/Navigation/NavigationExtended.styled";

export const NavigationExtended = (props) => {
  if (!props.navigationIsExtended) {
    return null;
  }

  return (
    <NavigationExtendedContainer>
      <div className="side-menu">
        <ul className="general-menu__list">
          <li className="general-menu__list-item">
            <a href="">Home</a>
          </li>
          <li className="general-menu__list-item">
            <a href="">News & Events</a>
          </li>
          <li className="general-menu__list-item">
            <a href="">About Us</a>
          </li>
          <li className="general-menu__list-item">
            <a href="">Contact Us</a>
          </li>
          <li className="general-menu__list-item">
            <a href="">Boards & Committees</a>
          </li>
        </ul>
        <div className="robust-menu">
          <div className="robust-menu__section-a"></div>
          <div className="robust-menu__section-b"></div>
          <div className="robust-menu__section-c"></div>
          <div className="robust-menu__section-d"></div>
        </div>
      </div>
    </NavigationExtendedContainer>
  );
};
