import { createContext } from "react";

export const HomeContext = createContext({
  popularServicesAndLinks: [],
  setPopularServicesAndLinks: () => {},
  recentUpdates: [],
  setRecentUpdates: () => {},
  calendarOfEvents: [],
  setCalendarOfEvents: () => {},
});
