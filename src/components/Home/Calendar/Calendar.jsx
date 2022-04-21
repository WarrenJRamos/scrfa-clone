import React, { useContext } from "react";
import { HomeContext } from "../../../context/homeContext";
import { CalendarContainer } from "../../../styles/Home/Calendar/Calendar.styled";
import { CalendarListItem } from "./CalendarListItem";

export const Calendar = () => {
  const homeContext = useContext(HomeContext);
  const calendarOfEvents = homeContext.calendarOfEvents;

  return (
    <CalendarContainer>
      <h2 className="calendar__header">Calendar of Events</h2>
      <ul className="calendar__list">
        {calendarOfEvents.map((calendarEvent) => {
          return (
            <CalendarListItem
              eventDate={calendarEvent.eventDate}
              eventTitle={calendarEvent.eventTitle}
              eventLocation={calendarEvent.eventLocation}
              eventTime={calendarEvent.eventTime}
              eventStatus={calendarEvent.eventStatus}
              eventContact={calendarEvent.eventContact}
            />
          );
        })}
      </ul>
      <button className="calendar__button">View All Events</button>
    </CalendarContainer>
  );
};
