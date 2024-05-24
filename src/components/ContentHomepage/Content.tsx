import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { getProduct } from "../../api/product";
import { ProductItem } from "../../interface/product";

const ContentCard = ({ product }: { product: ProductItem | undefined }) => {
  const [productItem, setProductItem] = useState<ProductItem | null>(null);

  async function fetchData() {
    try {
      const data = await getProduct();
      setProductItem(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Product item:", productItem);

  return (
    <>
      {product ? (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image_url} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ContentCard;


