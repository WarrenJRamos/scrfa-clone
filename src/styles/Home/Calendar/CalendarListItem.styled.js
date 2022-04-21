import styled from "styled-components";

export const CalendarListItemContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;

  .event {
    &__date {
      background-color: #8c6910;
      color: white;
      padding: 10px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;

      &-month {
      }

      &-day {
        font-size: 1.3rem;
      }
    }

    &__content {
      padding-bottom: 10px;
      border-bottom: 1px solid gray;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 4px;

      &-status {
        background-color: #d2b859;
        border-radius: 2px;
        padding: 2px;
        /* width: 70px; */

        &.red {
          background-color: #e9261d;
        }
      }

      &-title {
        font-size: 1.1rem;
        font-weight: 600;
      }
      &-location {
        display: flex;
        gap: 5px;
        align-items: center;
      }
      &-time {
        display: flex;
        gap: 5px;
        align-items: center;
      }
      &-contact {
        display: flex;
        gap: 5px;
        align-items: center;
      }
    }
  }
`;
