import React, { useContext } from "react";
import { HomeContext } from "../../../context/homeContext";
import { RecentUpdatesContainer } from "../../../styles/Home/RecentUpdates/RecentUpdates.styled";
import { RecentUpdatesListItem } from "./RecentUpdatesListItem";

export const RecentUpdates = () => {
  const homeContext = useContext(HomeContext);
  const recentUpdates = homeContext.recentUpdates;

  return (
    <RecentUpdatesContainer>
      <h2>Recent Updates</h2>
      <ul>
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
      <button>View More</button>
    </RecentUpdatesContainer>
  );
};
