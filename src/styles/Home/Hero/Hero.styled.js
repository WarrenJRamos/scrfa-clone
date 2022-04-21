import styled from "styled-components";
import heroImage from "../../../assets/shutterstock_42474535.jpg";

export const HeroContainer = styled.div`
  height: 378px;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .hero__text {
    max-width: 740px;
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: 400;
  }

  @media (max-width: 855px) {
    .hero__text {
      max-width: 450px;
      font-size: 1.4rem;
    }
  }
`;
