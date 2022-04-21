import React from "react";

import dataResearchIcon from "../../../assets/Data-Research-Icon.svg";
import geographyMappingIcon from "../../../assets/Geography-Icon.svg";
import programServicesIcon from "../../../assets/Programs-Icon.svg";
import legislativeFiscalIcon from "../../../assets/Legislative-Icon.svg";

import { CardGroupContainer } from "../../../styles/Home/Cards/CardGroup.styled";
import { Card } from "./Card";

export const CardGroup = () => {
  return (
    <CardGroupContainer>
      <div className="container">
        <Card
          src={dataResearchIcon}
          alt="Data & Research Icon"
          cardTitle="Data & Research"
        />
        <Card
          src={geographyMappingIcon}
          alt="Geography & Mapping Icon"
          cardTitle="Geography & Mapping"
        />
        <Card
          src={programServicesIcon}
          alt="Programs & Services Icon"
          cardTitle="Programs & Services"
        />
        <Card
          src={legislativeFiscalIcon}
          alt="Legislative Fiscal Impacts Icon"
          cardTitle="Legislative Fiscal Impacts"
        />
      </div>
    </CardGroupContainer>
  );
};
