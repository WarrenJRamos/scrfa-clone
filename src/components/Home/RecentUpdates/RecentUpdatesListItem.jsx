import React from "react";

export const RecentUpdatesListItem = (props) => {
  return (
    <li>
      <a href={props.href}>{props.title}</a>
      <p>{props.description}</p>
      <p>Published: {props.datePublished}</p>
      <span>{props.status}</span>
    </li>
  );
};
