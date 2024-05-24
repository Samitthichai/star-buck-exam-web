import React, { useEffect, useState } from "react";
// import ContentCard from "../../components/ContentHomepage/Content";
import { ProductItem } from "../../interface/product";
import { getProduct } from "../../api/product";
import { Button, Card } from "react-bootstrap";

const ProductContent  = () => {
  const [productItem, setProductItem] = useState<ProductItem[]>();    async function fetchData() {
        try {
          const response = await fetch('https://6650a4caec9b4a4a6032d920.mockapi.io/product/Product-StarBuck');
          const data = await response.json();
          setProductItem(data);
          console.log("Product item:", productItem);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      }
      useEffect(() => {
        fetchData();
      }, []);
    
  return (
    <>
     {productItem ? (
  productItem.map((product) => (
    <Card key={product.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image_url} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ))
) : (
  <p>Loading...</p>
)}

    </>
  );
}

export default ProductContent;
