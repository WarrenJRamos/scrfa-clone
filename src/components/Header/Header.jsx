import React, { useState } from "react";
import { HeaderContainer } from "../../styles/Header/HeaderStyled";
import { Navigation } from "./Navigation/Navigation";
import { NavigationExtended } from "./Navigation/NavigationExtended";

export const Header = () => {
  const [navigationIsExtended, setNavigationIsExtended] = useState(false);

  return (
    <HeaderContainer>
      <Navigation
        navigationIsExtended={navigationIsExtended}
        setNavigationIsExtended={setNavigationIsExtended}
      />
      <NavigationExtended
        navigationIsExtended={navigationIsExtended}
        setNavigationIsExtended={setNavigationIsExtended}
      />
    </HeaderContainer>
  );
};
