import bgHomePage from "../../../src/assets/bgHomePage.jpeg";
import { ProductItem } from "../../interface/product";
import ProductList from "./Containers/ProductList";
import ProductContent from "./Containers/ProductList";
const HomePage = () => {
  return (
    <>
      <div className="position-relative" style={{ height: "500px" }}>
        <img
          src={bgHomePage}
          alt="bg"
          className="w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <div className="w-auto h-50 text-white">
            <h3>STARBUCKS RESERVE</h3>
            <p className="w-60">
              Since 1971, it always has been and will always be about quality.
              We’re passionate about ethically sourcing only the finest Arabica
              coffee beans and roasting them with great care. Our passion for
              coffee is rivaled only by our love of sharing it.
            </p>
          </div>
        </div>
        
      </div>

      <div className="row justify-content-center">
  
        <ProductList/>
      </div>
     
    </>
  );
};

export default HomePage;
