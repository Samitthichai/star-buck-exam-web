import { useState, useEffect } from "react";
import { getAllProduct } from "../service/product";
import { ProductItem } from "../interface/product";
import { log } from "console";

export const usePagination = (itemsPerPage: number, data: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productItems, setProductItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    setProductItems(data);
  }, [data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productItems.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);

  const handlePageClick = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return {
    currentItems,
    currentPage,
    handlePageClick,
    setProductItems,
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
