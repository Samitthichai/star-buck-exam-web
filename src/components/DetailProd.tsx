import React, { useEffect, useState } from 'react';
import { ProductItem } from '../interface/product';



    const ProductDetail = ({ productId }: { productId: number }) => {
        const [product, setProduct] = useState<ProductItem | null>(null);
      
        useEffect(() => {
          async function fetchData() {
            try {
              const response = await fetch(`https://6650a4caec9b4a4a6032d920.mockapi.io/api/starbuck-product/${productId}`);
              const data = await response.json();
              setProduct(data);
            } catch (error) {
              console.error("Error fetching product data:", error);
            }
          }
          fetchData();
        }, [productId]);
      
        if (!product) {
          return <p>Loading...</p>;
        }
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 " style={{ width: '100%' }}>
      <div className="row" style={{ maxWidth: '1000px', width: '100%' }}>
        <div className="col border border-black">
          <div>
            <img src="image_url_here" alt="Product" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
        <div className="col border border-black">
          <div>
            <h3>{product.name}</h3>
            <p>
            {product.description}</p>
            <div>
              <h4>Coffee Profile</h4>
              <div className="row">
                <div className="col-6">
                  <strong>Acidity:</strong>
                </div>
                <div className="col-6">
                  <strong>Body:</strong>
                </div>
                <div className="col-6">
                  <strong>Processing Method:</strong> Natural
                </div>
                <div className="col-6">
                  <strong>Tasting Notes:</strong> Hazelnut, Dried fruit
                </div>
                <div className="col-6">
                  <strong>Complementary Flavors:</strong> Caramel, Chocolate
                </div>
                <div className="col-6">
                  <strong>Region:</strong> Latin America
                </div>
                <div className="col-6">
                  <strong>Price:</strong> 1000 Bath
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
