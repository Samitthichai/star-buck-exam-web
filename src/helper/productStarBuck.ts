import { useState, useEffect } from "react";
import { ProductItem } from "../interface/product";

export const usePagination = (itemsPerPage: number, data: ProductItem[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return {
    currentItems,
    currentPage,
    handlePageClick,
    setCurrentPage,
  };
};

export const SearchFilterProduct = (
  productItems: ProductItem[],
  searchQuery: string,
  selectRegion: string,
  selectedGrindOptions: string,
): ProductItem[] => {
  if (!productItems) return [];

  return productItems.filter((item) => {
    const isNameMatch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isRegionMatch =
      selectRegion.length === 0 || selectRegion.includes(item.region);
    const isGrindOptionMatch =
      selectedGrindOptions.length === 0 ||
      selectedGrindOptions.includes(item.grind_option);

    return isNameMatch && isRegionMatch && isGrindOptionMatch;
  });
};
