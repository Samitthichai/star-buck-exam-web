import React from "react";
import "../../src/styles/clear-button-filter.css";
interface FilterProps {
  regions: string[];
  selectedRegions: string[];
  onRegionChange: (region: string[]) => void;

  grindOptions: string[];
  selectedGrindOptions: string[];
  onGrindChange: (grindOption: string[]) => void;

  onClearFilters: () => void;
}

const Filter: React.FC<FilterProps> = ({
  regions,
  grindOptions,
  selectedRegions,
  selectedGrindOptions,
  onRegionChange,
  onGrindChange,
  onClearFilters,
}) => {
  const handleRegionCheckboxChange = (region: string) => {
    const updatedRegions = selectedRegions.includes(region)
      ? selectedRegions.filter((r) => r !== region)
      : [...selectedRegions, region];

    onRegionChange(updatedRegions);

  };
  

  const handleGrindCheckboxChange = (grindOption: string) => {
    const updatedGridOption = selectedGrindOptions.includes(grindOption)
    ? selectedGrindOptions.filter((g) => g !== grindOption)
    : [...selectedGrindOptions, grindOption];
 
    onGrindChange(updatedGridOption);
  };

  return (
    <div className="row" style={{ width: "auto", height: "auto" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Filter</h3>

        <button
          type="button"
          className="btn  clear-button"
          data-mdb-ripple-init
          onClick={onClearFilters}
        >
          X Clear
        </button>
      </div>
      <div className=" mt-3 ">
        <div>
          <h4 className=" fw-medium ">Region</h4>
          <hr className="m-0" />
          {regions.map((region) => (
            <div key={region} className=" pt-2 ">
              <input
                type="checkbox"
                className=" g-lg-5 "
                id={region}
                value={region}
                checked={selectedRegions.includes(region)}
                onChange={() => handleRegionCheckboxChange(region)}
              />
              <label className=" ps-2 " htmlFor={region}>
                {region}
              </label>
            </div>
          ))}
        </div>

        <div>
          <h4 className=" fw-medium mt-3">Grind Option</h4>
          <hr className="m-0" />
          {grindOptions.map((grindOption) => (
            <div key={grindOption} className=" pt-2 ">
              <input
                type="checkbox"
                className=" g-lg-5 "
                id={grindOption}
                value={grindOption}
                checked={selectedGrindOptions.includes(grindOption)}
                onChange={() => handleGrindCheckboxChange(grindOption)}
              />
              <label className=" ps-2 " htmlFor={grindOption}>
                {grindOption}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
