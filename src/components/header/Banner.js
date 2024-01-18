import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel fade className="carousel bg-dark">
      <Carousel.Item>
        <div className="carousel_image">
          <img src="./IMAGE/banner.jpg" alt="Phone" className="w-100" />
        </div>
        <Carousel.Caption>
          <h3>Best Smart Phone</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>Buy Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
