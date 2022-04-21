import React from "react";
import { HeroContainer } from "../../../styles/Home/Hero/Hero.styled";
import { SearchForm } from "../../Forms/SearchForm";

export const Hero = () => {
  return (
    <HeroContainer>
      <h1 className="hero__text">
        Providing insightful research, analysis, and resources to facilitate
        informed policy decisions and administration of services
      </h1>
      <SearchForm />
    </HeroContainer>
  );
};
