import React from "react";

export const CalendarListItem = (props) => {
  return (
    <li>
      <div>{props.eventDate}</div>
      <div>
        {props.eventStatus ? <span>{props.eventStatus}</span> : ""}
        <div>{props.eventTitle}</div>
        <div>{props.eventLocation}</div>
        <div>{props.eventTime}</div>
        <div>{props.eventContact}</div>
      </div>
    </li>
  );
};
