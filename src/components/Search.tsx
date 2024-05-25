import React, { useState } from 'react';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setSearchQuery(inputValue);
  };

  const handleClearButtonClick = () => {
    setSearchQuery(''); // Clear search query
    setInputValue(''); // Clear input value
  };

  return (
    <div className="input-group gap-3" style={{ width: 'auto' }}>
      <input
        type="search"
        className="form-control rounded-5"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleClearButtonClick}
      />
      <button
        type="button"
        className="btn rounded-5 gap-2"
        data-mdb-ripple-init
        style={{ backgroundColor: '#D6D6D6', color: 'white' }}
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
      
    </div>
  );
};

export default SearchInput;
