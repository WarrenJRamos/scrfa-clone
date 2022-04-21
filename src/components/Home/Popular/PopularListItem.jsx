import React from "react";

export const PopularListItem = (props) => {
  return (
    <li className={props.className}>
      <a href={props.href}>{props.title}</a>
    </li>
  );
};
