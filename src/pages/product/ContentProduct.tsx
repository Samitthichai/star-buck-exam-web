import React, { useEffect, useState } from "react";
// import ContentCard from "../../components/ContentHomepage/Content";
import { ProductItem } from "../../interface/product";
import { getProduct } from "../../api/product";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductContent = () => {
  const [productItem, setProductItem] = useState<ProductItem[]>();
  async function fetchData() {
    try {
      const response = await fetch(
        "https://6650a4caec9b4a4a6032d920.mockapi.io/api/starbuck-product"
      );
      const data = await response.json();
      setProductItem(data);
      console.log("Product item:", productItem);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);


  function handleToDetailPage(id: number) {
    // navigate(`/starbuck-product/${id}`);
   
  }

  return (
    <>
      <div  className="container d-flex justify-content-center"style={{ width: "50rem", height: "auto", margin: "2px" }}>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {productItem ? (
      productItem.map((product) => (
        <div key={product.id} className="col">
          <Card className="  position-sticky  " onClick={() => handleToDetailPage(product.id)} style={{ width: "auto", height: "auto", margin: "2px", cursor: "pointer"}}>
            <Card.Img
              className="object-fit-cover"
              variant="top"
              src={product.image_url}
              style={{ width: "auto", height: "12rem" }}
            />
            <Card.Body>
              <Card.Title className="font-weight-bold m-0 fs-20">{product.name}</Card.Title>
              <Card.Text>
                <div className="text-center mt-1" style={{ width: "100px" }}>
                <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
                  {product.grind_option[0]}
                </div>
              </div>
              </Card.Text>
              
              <Card.Text className="mt-3">{product.price} Bath</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
</div>


    </>
  );
};

export default ProductContent;


// const ProductContent = ({data}: {data: ProductItem[]}) => {
//   const [productItem, setProductItem] = useState<ProductItem[]>();
  
//   async function fetchData() {
//     try {
//       const response = await fetch(
//         "https://6650a4caec9b4a4a6032d920.mockapi.io/product/Product-StarBuck"
//       );
//       const data = await response.json();
//       setProductItem(data);
//       console.log("Product item:", productItem);
//     } catch (error) {
//       console.error("Error fetching product data:", error);
//     }
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="container d-flex justify-content-center"style={{ width: "50rem", height: "auto", margin: "2px" }}>
//   <div className="row row-cols-1 row-cols-md-3 g-4">
//     {productItem ? (
//       productItem.map((product) => (
//         <div key={product.id} className="col">
//           <Card style={{ width: "auto", height: "auto", margin: "2px" }}>
//             <Card.Img
//               className="object-fit-cover"
//               variant="top"
//               src={product.image_url}
//               style={{ width: "auto", height: "12rem" }}
//             />
//             <Card.Body>
//               <Card.Title className="font-weight-bold m-0 fs-20">{product.name}</Card.Title>
//               <Card.Text>
//               <div className="text-center mt-1" style={{ width: "100px" }}>
//                 <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
//                   {product.grind_option[0]}
//                 </div>
//               </div>
//               </Card.Text>
             
//               <Card.Text className="mt-3">{product.price} Bath</Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       ))
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>
// </div>


//     </>
//   );
// };