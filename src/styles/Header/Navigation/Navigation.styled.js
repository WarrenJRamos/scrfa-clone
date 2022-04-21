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
    }

    .company {
      display: flex;
      align-items: center;
      gap: 10px;

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
      }

      &__tagline {
        text-transform: none;
        font-style: italic;
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
      }
    }

    .search {
      background-color: yellow;

      &__button {
        padding: 7px;
        &-image {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
`;
