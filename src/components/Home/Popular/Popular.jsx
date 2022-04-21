import React, { useContext } from "react";

import { HomeContext } from "../../../context/homeContext";
import { PopularContainer } from "../../../styles/Home/Popular/Popular.styled";
import { PopularListItem } from "./PopularListItem";

export const Popular = () => {
  const homeContext = useContext(HomeContext);
  const popularServicesAndLinks = homeContext.popularServicesAndLinks;

  return (
    <PopularContainer className="container">
      <h2 className="popular__header">Popular Services and Links</h2>
      <ul className="popular__list">
        {popularServicesAndLinks.map((popularListItem) => {
          return (
            <PopularListItem
              key={popularListItem.id}
              title={popularListItem.title}
              href={popularListItem.href}
              className="popular__list-item"
            />
          );
        })}
      </ul>
    </PopularContainer>
  );
};
