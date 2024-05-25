import { useEffect, useState } from 'react';
import { ProductItem } from '../../interface/product';
import { useParams } from 'react-router-dom';



    const ProductDetail = () => {
      const { id } = useParams<{ id: string }>();
      console.log("Detail PAge Id",id);
      
        const [product, setProduct] = useState<ProductItem | null>(null);
      
        useEffect(() => {
          async function fetchData() {
            try {
              const response = await fetch(`https://6650a4caec9b4a4a6032d920.mockapi.io/api/starbuck-product/${id}`);
              const data = await response.json();
              setProduct(data);
            } catch (error) {
              console.error("Error fetching product data:", error);
            }
          }
          fetchData();
        }, []);
      
        if (!product) {
          return <p>Loading...</p>;
        }
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 " style={{ width: '100%' }}>
      <div className="row" style={{ maxWidth: '1000px', width: '100%',height: '500px' }}>
        <div className="col border border-black p-0">
          <div>
            <img className="w-100 h-auto object-fit-cover" src={product.image_url} alt="Product"  />
          </div>
        </div>
        <div className="col border border-black p-3 ">
          <div>
            <h3 >{product.name}</h3>
            <p>
            {product.description}</p>
            <div className=' mt-3 '>
              <h4>Coffee Profile</h4>
              <div className="row ">
                <div className="col-6   ">
                  <strong>Roast Level:</strong> {product.roast_level}
                </div>
                <div className="col-6">
                  <strong>weight:</strong> {product.weight}g
                </div>
                <div className="col-6 pt-3">
                  <strong>Grid Option</strong>   
                  <div className="text-center font-weight-bold rounded-5 bg-black text-white text-small" style={{ width: "100px" }}>
                  {product.grind_option}
                </div>
                </div>
        
                <div className="col-6 pt-3">
                  <strong>Flavors Profile:</strong> <p>{product.flavor_profile}</p>
                </div>
                <div className="col-6 pt-3">
                  <strong>Region:</strong> Latin America
                </div>
                <div className="col-6 pt-3">
                  <strong>Price:</strong> ${Number(product.price).toFixed(2)} 
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
