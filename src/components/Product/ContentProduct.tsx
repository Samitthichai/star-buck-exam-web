import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomPagination from "../Pagination";
import SearchInput from "../Search";
import { ProductItem } from "../../interface/product";

const ProductContent = () => {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://6650a4caec9b4a4a6032d920.mockapi.io/api/starbuck-product"
      );
      const data = await response.json();
      setProductItems(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  function handleToDetailPage(id: string) {
    navigate(`/starbuck-product/${id}`);
  }

  function handleSearch() {
    
    return productItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);


  const filteredProductItems = handleSearch();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="mt-2 container d-flex row justify-content-center" style={{ width: "50rem", height: "auto" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div key={product.id} className="col">
                <Card className="position-sticky" onClick={() => handleToDetailPage(product.id)} style={{ width: "auto", height: "auto", margin: "2px", cursor: "pointer" }}>
                  <Card.Img className="object-fit-cover" variant="top" src={product.image_url} style={{ width: "auto", height: "12rem" }} />
                  <Card.Body>
                    <Card.Title className="font-weight-bold m-0 fs-20">{product.name}</Card.Title>
                    <Card.Text>
                      <div className="text-center mt-1" style={{ width: "100px" }}>
                        <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
                          {product.grind_option}
                        </div>
                      </div>
                    </Card.Text>
                    <Card.Text className="mt-3">${Number(product.price).toFixed(2)}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>No matching products found.</p>
          )}
        </div>
      </div>
      <CustomPagination
        pageCount={Math.ceil(filteredProductItems.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageClick}
      />
    </>
  );
};

export default ProductContent;
