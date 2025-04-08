import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.jpg";
import "./homepage.css";

function CarouselCompnent() {
  return (
    <div className="carousel-container">
      <Carousel
        controls={false}
        indicators={false}
        interval={6000}
        pause={false}
      >
        <Carousel.Item>
          <img src={Img1} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img2} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} alt="Slide 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img4} alt="Slide 4" />
        </Carousel.Item>
      </Carousel>
      <div className="overlay">
        <div className="overlay-title">
          <span>Welcome to</span>
          <p>Pallas Hotel</p>
          <span>Darmstadt</span>
        </div>
        {/* <button className="overlay-button">Book a Room</button> */}
      </div>
    </div>
  );
}

export default CarouselCompnent;
