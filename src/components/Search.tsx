// src/components/SearchInput.tsx

import React, { useState } from 'react';

// Define the interface for the component props (if any)
interface SearchInputProps {
  onSearch: (query: string) => void;
}

// const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => { //{ onSearch }
//   const [query, setQuery] = useState<string>('');

//   const handleSearch = () => {
//     onSearch(query);
//   };

  const SearchInput =() => {

 

  return (
    <div className="input-group  gap-3 " style={{ width: '1000px' }}>
      <input
        type="search"
        className="form-control rounded-5"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        className="btn  rounded-5  gap-2 "
        data-mdb-ripple-init
        // onClick={handleSearch}
        style={{ backgroundColor: '#D6D6D6', color: 'white' }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
