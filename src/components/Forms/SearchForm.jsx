import React from "react";
import { SearchFormContainer } from "../../styles/Search/SearchForm.styled";

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <label htmlFor="search">Search</label>
      <input type="text" />
      <button type="submit">Apply</button>
    </SearchFormContainer>
  );
};
