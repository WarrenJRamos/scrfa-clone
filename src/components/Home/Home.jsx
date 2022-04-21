import React, { useState, useEffect } from "react";

import { HomeContext } from "../../context/homeContext";
import { dummyAPIResponse } from "../../dummyData";
import { HomeContentContainer } from "../../styles/Home/Home.styled";

import { CardGroup } from "./Cards/CardGroup";
import { Hero } from "./Hero/Hero";
import { Popular } from "./Popular/Popular";

export const Home = () => {
  const [popularServicesAndLinks, setPopularServicesAndLinks] = useState([]);
  const [recentUpdates, setRecentUpdates] = useState([]);
  const [calendarOfEvents, setCalendarOfEvents] = useState([]);

  const fetchData = () => {
    setPopularServicesAndLinks(dummyAPIResponse.popularServicesAndLinks);
    setRecentUpdates(dummyAPIResponse.recentUpdates);
    setCalendarOfEvents(dummyAPIResponse.calendarOfEvents);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        popularServicesAndLinks,
        setPopularServicesAndLinks,
        recentUpdates,
        setRecentUpdates,
        calendarOfEvents,
        setCalendarOfEvents,
      }}
    >
      <div>
        <Hero />
        <CardGroup />
        <Popular />
        <div>...</div>
      </div>
    </HomeContext.Provider>
  );
};
