import styled from "styled-components";

export const HomeContainer = styled.div`
  .home__section-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    margin-bottom: 60px;
    gap: 20px;
  }

  .back-to-top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;

    a {
      display: flex;
      align-items: center;
      gap: 10px;

      div {
        /* FIXME */
        background-color: #0074c1;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .home__section-bottom {
      flex-direction: column;
    }
  }
`;
