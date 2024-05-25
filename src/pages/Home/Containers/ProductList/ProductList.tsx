import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductItem } from "../../../../interface/product";
import SearchInput from "../../../../components/Search";
import CustomPagination from "../../../../components/Pagination";
import FilterRegion from "./../../../../components/Filter"; // Adjust the import path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllProduct } from "../../../../service/product";
import Filter from "./../../../../components/Filter";

const ProductContent = () => {
  const [productItems, setProductItems] = useState<ProductItem[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrindOptions, setSelectedGrindOptions] = useState<string[]>(
    []
  );
  const [selectRegion, setSelectRegion] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProduct();
        setProductItems(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleToDetailPage = (id: string) => {
    navigate(`/starbuck-product/${id}`);
  };

  const handleSearch = () => {
    if (!productItems) return [];
    return productItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleGrindChange = (grindOption: string) => {
    setSelectedGrindOptions((prevSelected) =>
      prevSelected.includes(grindOption)
        ? prevSelected.filter((g) => g !== grindOption)
        : [...prevSelected, grindOption]
    );
    setCurrentPage(1); // Reset page to 1 when applying filters
  };

  const handleRegionchange = (region: string) => {
    setSelectRegion((prevSelected) =>
      prevSelected.includes(region)
        ? prevSelected.filter((r) => r !== region)
        : [...prevSelected, region]
    );
    setCurrentPage(1);
  };

  const handleClearFilter = () => {

    setSelectRegion([]);
    setSelectedGrindOptions([]);
    return false
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectRegion, selectedGrindOptions]);

  const filteredProductItems = handleSearch().filter((item) => {
    if (selectRegion.length > 0 && !selectRegion.includes(item.region))
      return false;
    if (
      selectedGrindOptions.length > 0 &&
      !selectedGrindOptions.includes(item.grind_option)
    )
      return false;
    return true;
  });

  /**This condition checks if a region filter has been applied (regionFilter is not an empty string)
   * and if the item's region does not match the selected region.
   * If both conditions are true, the item is excluded from the filtered results
   * (return false). */

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageClick = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const regions = Array.from(
    new Set(productItems?.map((item) => item.region) || [])
  );
  const grindOptions = Array.from(
    new Set(productItems?.map((item) => item.grind_option) || [])
  );

  return (
    <>
      <div
        className="mt-2 container d-flex row justify-content-center"
        style={{ width: "55rem", height: "auto" }}
      >
        <Filter
          regions={regions}
          selectedRegions={selectRegion}
          onRegionChange={handleRegionchange}
          grindOptions={grindOptions}
          selectedGrindOptions={selectedGrindOptions}
          onGrindChange={handleGrindChange}
          onClearFilters={handleClearFilter}
        />
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="row row-cols-1 row-cols-md-3 g-2">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div key={product.id} className="col">
                <Card
                  className="position-sticky"
                  onClick={() => handleToDetailPage(product.id)}
                  style={{
                    width: "auto",
                    height: "auto",
                    margin: "2px",
                    cursor: "pointer",
                  }}
                >
                  <Card.Img
                    className="object-fit-cover"
                    variant="top"
                    src={product.image_url}
                    style={{ width: "auto", height: "12rem" }}
                  />
                  <Card.Body>
                    <Card.Title className="font-weight-bold m-0 fs-20">
                      {product.name}
                    </Card.Title>
                    <Card.Text>
                      <div
                        className="text-center mt-1"
                        style={{ width: "100px" }}
                      >
                        <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
                          {product.grind_option}
                        </div>
                      </div>
                    </Card.Text>
                    <Card.Text className="mt-3">
                      ${Number(product.price).toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>No matching products found.</p>
          )}
        </div>
        <CustomPagination
          pageCount={Math.ceil(
            (filteredProductItems.length || 0) / itemsPerPage
          )}
          currentPage={currentPage}
          onPageChange={handlePageClick}
        />
      </div>
    </>
  );
};

export default ProductContent;
