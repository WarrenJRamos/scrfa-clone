import styled from "styled-components";

export const CardContainer = styled.a`
  flex-basis: 200px;
  background-color: white;
  text-decoration: none;
  /* FIXME */
  color: black;

  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .card-icon {
    width: 120px;
    height: 120px;
    img {
    }
  }

  .card-title {
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
  }
`;
