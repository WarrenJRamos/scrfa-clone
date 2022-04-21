import React from "react";
import { CardContainer } from "../../../styles/Home/Cards/Card.styled";

export const Card = (props) => {
  return (
    <CardContainer href="">
      <div className="card-icon">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="card-title">{props.cardTitle}</div>
    </CardContainer>
  );
};
