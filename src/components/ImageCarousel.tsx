import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/styles/backgrond-Img.css";
type ImageProps = {
  images: string[];
};
const CarouselComponent: React.FC<ImageProps> = ({ images }) => {
  return (
    <>
      <div className="bg-image h-200">
        {images.length > 1 ? (
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block h-200 w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <img className="d-block w-100" src={images[0]} alt="Single slide" />
        )}
      </div>
    </>
  );
};

export default CarouselComponent;
