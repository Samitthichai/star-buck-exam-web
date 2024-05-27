import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductItem } from "../../interface/product";
import { getAllProduct } from "../../service/product";
import CustomPagination from "../Pagination";
import SearchInput from "../Search";
import Filter from "../Filter";
import {
  SearchFilterProduct,
  usePagination,
} from "../../helper/productStarBuck";
import "../../styles/card.css";

const ProductContent = () => {
  const [itemsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrindOptions, setSelectedGrindOptions] = useState<string[]>([]);
  const [selectRegion, setSelectRegion] = useState<string[]>([]);
  const [initialData, setInitialData] = useState<ProductItem[]>([]);
  const navigate = useNavigate();

  const filteredProductItems = SearchFilterProduct(
    initialData,
    searchQuery,
    selectRegion,
    selectedGrindOptions
  );
  const { currentItems, currentPage, handlePageClick, setCurrentPage } =
    usePagination(12, filteredProductItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProduct();
        setInitialData(products);
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

  const handleGrindChange = (grindOption: string[]) => {
    setSelectedGrindOptions(grindOption);
    setCurrentPage(1);
  };

  const handleRegionChange = (region: string[]) => {
    setSelectRegion(region);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setSelectRegion([]);
    setSelectedGrindOptions([]);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectRegion, selectedGrindOptions]);

  return (
    <Row className="mx-0">
      <Col xs={12} md={4}>
        <Filter
          regions={Array.from(
            new Set(initialData?.map((item) => item.region) || [])
          )}
          selectedRegions={selectRegion}
          onRegionChange={handleRegionChange}
          grindOptions={Array.from(
            new Set(initialData?.map((item) => item.grind_option) || [])
          )}
          selectedGrindOptions={selectedGrindOptions}
          onGrindChange={handleGrindChange}
          onClearFilters={handleClearFilter}
        />
      </Col>
      <Col xs={12} md={8}>
        <SearchInput searchQuery={searchQuery} setSearchQuery={handleSearch} />

        <Row xs={1} md={2} lg={3} className="g-2 mt-3">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <Col key={product.id}>
                <Card
                  className=" card-hover"
                  onClick={() => handleToDetailPage(product.id)}
                  style={{ cursor: "pointer", height:"20rem" }}
                >
                  <Card.Img
                    className="object-fit-cover bg-image"
                    variant="top"
                    src={product.image_url[0]}
                    style={{ height: "12rem" }}
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
              </Col>
            ))
          ) : (
            <div>
              <p className="col">No matching products found.</p>
            </div>
          )}
        </Row>
        <CustomPagination
          pageCount={Math.ceil((initialData.length || 0) / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageClick}
        />
      </Col>
    </Row>
  );
};

export default ProductContent;
