import React, { useContext } from "react";

import { HomeContext } from "../../../context/homeContext";
import { PopularContainer } from "../../../styles/Home/Popular/Popular.styled";
import { PopularListItem } from "./PopularListItem";

export const Popular = () => {
  const homeContext = useContext(HomeContext);
  const popularServicesAndLinks = homeContext.popularServicesAndLinks;

  return (
    <PopularContainer>
      <h2 className="popular__header">Popular Services and Links</h2>
      <ul className="popular__list">
        {popularServicesAndLinks.map((popularListItem) => {
          return (
            <PopularListItem
              title={popularListItem.title}
              href={popularListItem.href}
            />
          );
        })}
      </ul>
    </PopularContainer>
  );
};
