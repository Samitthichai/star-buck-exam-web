import React, { useState } from "react";

const Filter = ({ onFilterChange }: { onFilterChange: (selectedFilters: string[]) => void }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => filter !== value));
    }
  };

  const applyFilters = () => {
    onFilterChange(selectedFilters);
  };

  return (
    <div>
      <h3>Filters</h3>
      <label>
        <input type="checkbox" value="filter1" onChange={handleFilterChange} />
        Filter 1
      </label>
      <label>
        <input type="checkbox" value="filter2" onChange={handleFilterChange} />
        Filter 2
      </label>
      
      {/* Add more filters as needed */}
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
