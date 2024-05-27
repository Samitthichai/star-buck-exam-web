import React, { useState } from "react";
import "../../src/styles/button.css"
interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setSearchQuery(inputValue);
  };

  const handleClearButtonClick = () => {
    setSearchQuery("");
    setInputValue("");
  };

  return (
    <div className="input-group gap-3 justify-content-center  align-items-center ">
      <input
        type="search"
        className="form-control rounded-5 w-auto "
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleClearButtonClick}
      />
      <button
        type="button"
        className="btn rounded-5 gap-2 button"
        data-mdb-ripple-init
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
