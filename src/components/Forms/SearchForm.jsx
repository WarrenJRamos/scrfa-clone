import React from "react";
import { SearchFormContainer } from "../../styles/Forms/SearchForm.styled";

export const SearchForm = (props) => {
  return (
    <SearchFormContainer
      className={`${props.searchIsClicked ? "absolute" : ""}`}
    >
      <label htmlFor="search" className="search__label">
        Search
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search rfa.sc.gov"
        className="search__input"
      />
      <button type="submit" className="search__submit">
        Apply
      </button>
    </SearchFormContainer>
  );
};
