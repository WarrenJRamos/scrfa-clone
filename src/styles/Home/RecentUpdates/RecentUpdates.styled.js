import styled from "styled-components";

export const RecentUpdatesContainer = styled.div`
  .recent-updates {
    &__header {
      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 45px;
        /* FIXME */
        background-color: #8c6910;
        margin-top: 10px;
      }
    }

    &__list {
      margin-top: 20px;
      list-style: none;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }

    &__button {
      margin-top: 20px;
      border: none;
      padding: 12px 14px;
      color: white;
      /* FIXME */
      background-color: #0074c1;
      text-transform: uppercase;
    }
  }
`;
