import React, { useState } from "react";
import Filter from "../Filter";
import CustomPagination from "../Pagination";
import ProductContent from "./ContentProduct";
import SearchInput from "../Search";

const ContentsProduct = () => {
  const [filters, setFilters] = useState({
    categories: [],
    flavorProfile: [],
    caffeineLevels: []
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div className="row no-gutters justify-content-center mt-3">
        <div className="col-3 w-auto">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="col-6 col-sm-6 w-auto">
          <ProductContent />
        </div>
      </div>
    </>
  );
};

export default ContentsProduct;
