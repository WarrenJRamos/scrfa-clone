import React, { useState, useEffect } from "react";

import caret from "../../assets/CaretUp.svg";

import { HomeContext } from "../../context/homeContext";
import { dummyAPIResponse } from "../../dummyData";
import { HomeContainer } from "../../styles/Home/Home.styled";

import { CardGroup } from "./Cards/CardGroup";
import { Hero } from "./Hero/Hero";
import { Popular } from "./Popular/Popular";
import { RecentUpdates } from "./RecentUpdates/RecentUpdates";
import { Calendar } from "./Calendar/Calendar";

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
    <HomeContainer>
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
        <Hero />
        <CardGroup />
        <Popular />
        <section className="container home__section-bottom">
          <RecentUpdates />
          <Calendar />
        </section>
        <div className="back-to-top container">
          <a href="#">
            Back to Top
            <div>
              <img src={caret} alt="caret" />
            </div>
          </a>
        </div>
      </HomeContext.Provider>
    </HomeContainer>
  );
};
