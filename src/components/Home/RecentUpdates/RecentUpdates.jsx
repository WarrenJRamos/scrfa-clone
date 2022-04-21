import React, { useContext } from "react";
import { HomeContext } from "../../../context/homeContext";
import { RecentUpdatesContainer } from "../../../styles/Home/RecentUpdates/RecentUpdates.styled";
import { RecentUpdatesListItem } from "./RecentUpdatesListItem";

export const RecentUpdates = () => {
  const homeContext = useContext(HomeContext);
  const recentUpdates = homeContext.recentUpdates;

  return (
    <RecentUpdatesContainer>
      <h2 className="recent-updates__header">Recent Updates</h2>
      <ul className="recent-updates__list">
        {recentUpdates.map((recentUpdate) => {
          return (
            <RecentUpdatesListItem
              title={recentUpdate.title}
              href={recentUpdate.href}
              description={recentUpdate.description}
              datePublished={recentUpdate.datePublished}
              status={recentUpdate.status}
            />
          );
        })}
      </ul>
      <button className="recent-updates__button">View More</button>
    </RecentUpdatesContainer>
  );
};
