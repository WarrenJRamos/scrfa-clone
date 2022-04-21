import styled from "styled-components";

export const RecentUpdatesListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .update {
    &__title {
      font-size: 1.1rem;
    }

    &__description {
    }

    &__date {
      display: flex;
      align-items: flex-end;
      gap: 4px;

      .published {
        font-weight: 600;
      }

      .date-text {
        color: #333333;
      }

      .update__status {
        margin-left: 5px;
        color: white;
        padding: 3px;
        background-color: #757575;
        border-radius: 2px;
      }
    }
  }
`;
