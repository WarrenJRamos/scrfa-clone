import styled from "styled-components";

export const NavigationExtendedContainer = styled.div`
  border-bottom: 10px solid #1b3a61;
  display: flex;
  gap: 20px;

  .side-menu {
    /* FIXME */
    background-color: #f3f6f9;
    padding: 30px;
    flex-basis: 200px;

    &__list {
      list-style: none;

      &-item {
        margin-bottom: 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #8c6910;
        text-align: center;

        a {
          text-decoration: none;
          /* FIXME */
          color: black;
        }
      }
    }
  }

  .robust-menu {
    padding: 30px 14px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;

    &__section {
      .list-header {
        font-weight: 600;

        &::after {
          margin: 7px 0 12px;
          content: "";
          display: block;
          height: 3px;
          width: 50px;
          background-color: #8c6910;
        }
      }
    }

    &__list {
      list-style: none;

      &-item {
        margin-bottom: 10px;
      }
    }
  }
`;
