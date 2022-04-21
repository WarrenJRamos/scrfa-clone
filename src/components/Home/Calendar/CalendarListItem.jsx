import React from "react";
import { CalendarListItemContainer } from "../../../styles/Home/Calendar/CalendarListItem.styled";
import clock from "../../../assets/Clock.svg";
import location from "../../../assets/Location.svg";
import phone from "../../../assets/Phone.svg";

export const CalendarListItem = (props) => {
  const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  return (
    <CalendarListItemContainer>
      <div className="event__date">
        <span className="event__date-month">
          {monthNames[new Date(props.eventDate).getMonth()]}
        </span>
        <br />
        <span className="event__date-day">
          {new Date(props.eventDate).getDay()}
        </span>
      </div>
      <div className="event__content">
        {props.eventStatus ? (
          <span
            className={
              props.eventStatus.toLowerCase() === "cancelled"
                ? "event__content-status red"
                : "event__content-status"
            }
          >
            {props.eventStatus}
          </span>
        ) : (
          ""
        )}
        <div className="event__content-title">{props.eventTitle}</div>
        <div className="event__content-location">
          <img src={location} alt="location" />
          {props.eventLocation}
        </div>
        <div className="event__content-time">
          <img src={clock} alt="time" />
          {props.eventTime}
        </div>
        <div className="event__content-contact">
          <img src={phone} alt="contact" />
          {props.eventContact}
        </div>
      </div>
    </CalendarListItemContainer>
  );
};
