import { useEffect, useState } from "react";
import { ProductItem } from "../../interface/product";
import { useParams } from "react-router-dom";
import { getProductById } from "../../service/product";
import "../../../src/styles/backgrond-Img.css";
import CarouselComponent from "../../components/ImageCarousel";
import LevelGenerate from "../../components/levelComponent";
import FormattedList from "../../components/FormatText";
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Detail PAge Id", id);

  const [product, setProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductById(id);
        setProduct(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div
      className=" position-relative d-flex justify-content-center align-items-center mt-5 "
      style={{ width: "100%", height: "50%" }}
    >
      <div
        className="row"
        style={{ maxWidth: "auto", width: "90%", height: "100vh" }}
      >
        <div className="col  p-0">
          <div>
            <CarouselComponent images={product.image_url} />
          </div>
        </div>
        < className="col">
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="mt-3">
              <h4>Coffee Profile</h4>
              <div className="row  w-100     ">
                <div className="col-6">
                  <strong>Roast Level:</strong>
                  <LevelGenerate numberOfCircles={product.roast_level} />
                </div>
                <div className="col-6">
                  <strong>Weight:</strong> {product.weight}g
                </div>
                <div className="col-6 pt-3">
                  <strong>Grid Option</strong>
                  <div className="">{product.grind_option}</div>
                </div>
                <div className="col-6 pt-3">
                  <strong>Flavors Profile:</strong>
                  <FormattedList msg={product.flavor_profile} />
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
        </>
      </div>
    </div>
  );
};

export default ProductDetail;
