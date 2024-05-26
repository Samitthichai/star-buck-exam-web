import { useEffect, useState } from "react";
import { ProductItem } from "../../interface/product";
import { useParams } from "react-router-dom";
import { getProductById } from "../../service/product";
import CarouselComponent from "../../components/ImageCarousel";
import LevelGenerate from "../../components/levelComponent";
import FormattedList from "../../components/FormatText";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Detail Page Id", id);

  const [product, setProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <CarouselComponent images={product.image_url} />
        </div>
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="mt-3">
            <h4>Coffee Profile</h4>
            <div className="row">
              <div className="col-md-6">
                <strong>Roast Level:</strong>
                <LevelGenerate numberOfCircles={product.roast_level} />
              </div>
              <div className="col-md-6">
                <strong>Weight:</strong> {product.weight}g
              </div>
              <div className="col-md-6 pt-3">
                <strong>Grid Option</strong>
                <div className="text-center font-weight-bold rounded-5 bg-black text-white text-small">
                  {product.grind_option}
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <strong>Flavors Profile:</strong>
                <FormattedList msg={product.flavor_profile} />
              </div>
              <div className="col-md-6 pt-3">
                <strong>Region:</strong> Latin America
              </div>
              <div className="col-md-6 pt-3">
                <strong>Price:</strong> ${Number(product.price).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
