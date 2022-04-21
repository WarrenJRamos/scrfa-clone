import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 10px;

  .search {
    &__label {
      visibility: hidden;
      height: 0;
      width: 0;
    }
    &__input {
      padding: 10px 5px;
      width: 500px;

      @media (max-width: 855px) {
        width: 300px;
      }
    }
    &__submit {
      flex-basis: 100px;
      text-transform: uppercase;
      font-weight: 600;
      border: none;
      color: white;
      background-color: #3068ad;
      padding: 10px;
    }
  }

  &.absolute {
    position: absolute;
    right: 0;
    padding: 10px;
    background-color: #3068ad;

    .search__input {
      padding: 10px 5px;
      width: 300px;
    }

    .search__submit {
      border: 2px solid white;
    }
  }
`;
