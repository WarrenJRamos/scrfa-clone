import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid gray;

  .nav-left {
    display: flex;

    .menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 0 10px;

      border: none;
      /* FIXME */
      background-color: #3068ad;

      &__text {
        text-transform: uppercase;
        color: white;
      }
    }

    .company {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-left: 12px;

      &__logo {
        img {
          height: 85px;
          width: 85px;
        }
      }

      &__name {
        display: flex;
        text-transform: uppercase;
        flex-direction: column;
        /* FIXME */
        font-family: "Roboto Slab", sans-serif;
        font-weight: 500;
      }

      &__tagline {
        text-transform: none;
        font-style: italic;
        /* FIXME */
        font-family: "Roboto Condensed", sans-serif;
      }
    }
  }

  .general-menu {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-right: 12px;

    &__list {
      display: flex;
      align-items: center;
      gap: 30px;
      text-transform: uppercase;

      &-item {
        list-style: none;

        a {
          text-decoration: none;
          /* FIXME */
          color: black;
        }
      }
    }

    .search {
      &__button {
        padding: 9px;
        /* FIXME */
        border: 1px solid #3068ad;
        border-radius: 3px;

        &-image {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
`;
