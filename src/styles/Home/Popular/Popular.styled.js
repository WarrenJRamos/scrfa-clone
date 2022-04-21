import styled from "styled-components";

export const PopularContainer = styled.div`
  margin-top: 30px;

  .popular__header {
    text-transform: uppercase;

    &::after {
      content: "";
      display: block;
      height: 5px;
      background-color: #1b3a61;
    }
  }

  .popular__list {
    margin-top: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 40px;
    list-style: none;

    &-item {
      flex-basis: 300px;
      a {
      }
    }
  }
`;
