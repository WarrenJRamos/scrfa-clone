import React from "react";

export const NavigationExtended = (props) => {
  if (!props.navigationIsExtended) {
    return null;
  }

  return (
    <div>
      <h2>NavigationExtended</h2>
    </div>
  );
};
