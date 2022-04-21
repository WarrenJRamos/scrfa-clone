import styled from "styled-components";
import heroImage from "../../../assets/shutterstock_42474535.jpg";

export const HeroContainer = styled.div`
  height: 378px;
  background-image: url(${heroImage});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hero__text {
    max-width: 740px;
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: 400;
  }
`;