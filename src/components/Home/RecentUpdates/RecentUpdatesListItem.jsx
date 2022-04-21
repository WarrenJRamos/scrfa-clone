import React from "react";
import { RecentUpdatesListItemContainer } from "../../../styles/Home/RecentUpdates/RecentUpdatesListItem.styled";

export const RecentUpdatesListItem = (props) => {
  return (
    <RecentUpdatesListItemContainer>
      <a href={props.href} className="update__title">
        {props.title}
      </a>
      <p className="update__description">{props.description}</p>
      <p className="update__date">
        <span className="published">Published: </span>
        <span className="date-text">{props.datePublished}</span>
        <span className="update__status">{props.status}</span>
      </p>
    </RecentUpdatesListItemContainer>
  );
};
