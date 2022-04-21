import styled from "styled-components";

export const PopularContainer = styled.div`
  /* FIXME THE 3 LINES BELOW ARE REPEATED IN A COUPLE CONTAINERS */
  /* max-width: 1200px;
  padding: 0 1.5rem;
  margin: auto; */

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
