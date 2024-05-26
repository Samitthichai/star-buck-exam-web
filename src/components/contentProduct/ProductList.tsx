import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card, Col, PageItem, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../src/styles/card.css";
import {
  SearchFilterProduct,
  usePagination,
} from "../../helper/productStarBuck";
import Filter from "../Filter";
import SearchInput from "../Search";
import CustomPagination from "../Pagination";
import { ProductItem } from "../../interface/product";
import { getAllProduct } from "../../service/product";
const ProductContent = () => {
  const [itemsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrindOptions, setSelectedGrindOptions] = useState<string>("");
  const [selectRegion, setSelectRegion] = useState<string>("");
  const [initialData, setInitialData] = useState<ProductItem[]>([]);
  const navigate = useNavigate();

  const filteredProductItems = SearchFilterProduct(
    initialData,
    searchQuery,
    selectRegion,
    selectedGrindOptions,
  );
  const { currentItems, currentPage, handlePageClick, setCurrentPage } =
    usePagination(12, filteredProductItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProduct();
        setInitialData(products);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleToDetailPage = (id: string) => {
    navigate(`/starbuck-product/${id}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleGrindChange = (grindOption: string) => {
    setSelectedGrindOptions(grindOption);
    setCurrentPage(1);
  };

  const handleRegionChange = (region: string) => {
    setSelectRegion(region);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setSelectRegion("");
    setSelectedGrindOptions("");
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectRegion, selectedGrindOptions]);

  const regions = Array.from(
    new Set(initialData?.map((item) => item.region) || []),
  );
  const grindOptions = Array.from(
    new Set(initialData?.map((item) => item.grind_option) || []),
  );
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={4} style={{ width: "15rem" }}>
          <Filter
            regions={regions}
            selectedRegions={selectRegion}
            onRegionChange={handleRegionChange}
            grindOptions={grindOptions}
            selectedGrindOptions={selectedGrindOptions}
            onGrindChange={handleGrindChange}
            onClearFilters={handleClearFilter}
          />
        </Col>
        <Col sm={8}>
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={handleSearch}
          />

          <div className="row row-cols-1 row-cols-md-3 g-2 mt-3">
            {currentItems.length > 0 ? (
              currentItems.map((product) => (
                <div key={product.id} className="col">
                  <Card
                    className="position-sticky card-hover"
                    onClick={() => handleToDetailPage(product.id)}
                    style={{
                      width: "15rem",
                      height: "auto",
                      margin: "2px",
                      cursor: "pointer",
                      borderRadius: "none",
                    }}
                  >
                    <Card.Img
                      className="object-fit-cover"
                      variant="top"
                      src={product.image_url}
                      style={{
                        width: "auto",
                        height: "12rem",
                        backgroundColor: "#067655",
                      }}
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
            pageCount={Math.ceil((initialData.length || 0) / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageClick}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductContent;
