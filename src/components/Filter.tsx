import React from "react";

interface FilterProps {
  regions: string[];
  selectedRegions: string;
  onRegionChange: (region: string) => void;

  grindOptions: string[];
  selectedGrindOptions: string;
  onGrindChange: (grindOption: string) => void;

  onClearFilters: () => void;
}

const Filter: React.FC<FilterProps> = ({
  regions,
  grindOptions,
  selectedRegions,
  selectedGrindOptions,
  onRegionChange,
  onGrindChange,
  onClearFilters
}) => {
  const handleRegionCheckboxChange = (region: string) => {
    onRegionChange(region);
  };

  const handleGrindCheckboxChange = (grindOption: string) => {
    onGrindChange(grindOption);
  };

  return (
    <div className="row">
      <div className="row">
        <h2>Filter</h2>
        <button
          type="button"
          className="btn rounded-5 gap-2"
          data-mdb-ripple-init
          style={{ backgroundColor: '#D6D6D6', color: 'white' }}
          onClick={onClearFilters}
        >
          Clear
        </button>
      </div>
      <div>
        <h4>Region</h4>
        {regions.map((region) => (
          <div key={region}>
            <input
              type="checkbox"
              id={region}
              value={region}
              checked={selectedRegions.includes(region)}
              onChange={() => handleRegionCheckboxChange(region)}
            />
            <label htmlFor={region}>{region}</label>
          </div>
        ))}
      </div>

      <div>
        <h4>Grind Option</h4>
        {grindOptions.map((grindOption) => (
          <div key={grindOption}>
            <input
              type="checkbox"
              id={grindOption}
              value={grindOption}
              checked={selectedGrindOptions.includes(grindOption)}
              onChange={() => handleGrindCheckboxChange(grindOption)}
            />
            <label htmlFor={grindOption}>{grindOption}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
