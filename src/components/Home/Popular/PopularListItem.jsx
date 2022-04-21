import React from "react";

export const PopularListItem = (props) => {
  return (
    <li className="popular__list-item">
      <a href={props.href}>{props.title}</a>
    </li>
  );
};
