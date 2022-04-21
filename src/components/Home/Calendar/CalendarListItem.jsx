import React from "react";
import { CalendarListItemContainer } from "../../../styles/Home/Calendar/CalendarListItem.styled";

export const CalendarListItem = (props) => {
  return (
    <CalendarListItemContainer>
      <div className="event__date">{props.eventDate}</div>
      <div className="event__content">
        {props.eventStatus ? (
          <span className="event__content-status">{props.eventStatus}</span>
        ) : (
          ""
        )}
        <div className="event__content-title">{props.eventTitle}</div>
        <div className="event__content-location">{props.eventLocation}</div>
        <div className="event__content-time">{props.eventTime}</div>
        <div className="event__content-contact">{props.eventContact}</div>
      </div>
    </CalendarListItemContainer>
  );
};
