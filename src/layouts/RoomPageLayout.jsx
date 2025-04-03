import "./roompagelayout.css";
import Img1 from "../assets/1.jpg";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import space from "../assets/space.svg";
import ac from "../assets/ac.svg";
import bed from "../assets/bed.svg";
import tv from "../assets/tv.svg";
import Slider from "react-slick";

export default function RoomPageLayout() {
  return (
    <div>
      <IntroSection />
      <CarouselSection />
    </div>
  );
}

function IntroSection() {
  return (
    <div className="intro-section-container">
      <div className="intro-img-container">
        <img src={Img1} alt="Slide 1" className="intro-img" />
        <div className="overlay">
          <div className="overlay-title">Single Room</div>
          <button className="overlay-subtitle">
            A cozy retreat for solo travelers seeking comfort and privacy.
          </button>
        </div>
      </div>
      <Container fluid className="sub-intro-container">
        <Row className="grid-row">
          <Col md={6} sm={12} className="sub-intro--title">
            <p>Private & Luxurious</p>
            <span>Single Room</span>
          </Col>
          <Col md={6} sm={12} className="sub-intro--paragraph">
            More than just a room— your personal escape. Relax in a modern space
            with premium bedding, elegant touches, and everything you need to
            unwind in peace.
          </Col>
        </Row>
        <Row className="grid-row" style={{ marginTop: "5rem" }}>
          <Col sm={6} md={4} lg={3} className="sub-intro--icon-block">
            <img src={space} className="icon" />
            <span className="icon-text">10 - 15&#13217;</span>
          </Col>
          <Col sm={6} md={4} lg={3} className="sub-intro--icon-block">
            <img src={bed} className="icon" />
            <span className="icon-text">10 - 15&#13217;</span>
          </Col>
          <Col sm={6} md={4} lg={3} className="sub-intro--icon-block">
            <img src={ac} className="icon" />
            <span className="icon-text">10 - 15&#13217;</span>
          </Col>
          <Col sm={6} md={4} lg={3} className="sub-intro--icon-block">
            <img src={tv} className="icon" />
            <span className="icon-text">10 - 15&#13217;</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function CarouselSection() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
  };

  const roomImgs = [
    { img: Img1, alt: "Room Image" },
    { img: Img1, alt: "Room Image" },
    { img: Img1, alt: "Room Image" },
  ];

  return (
    <div className="slider-container">
      <Slider
        {...settings}
        style={{ maxHeight: "530px", overflow: "hidden", position: "relative" }}
      >
        {roomImgs.map((room) => (
          <div key={room.name}>
            <img
              src={room.img}
              alt={room.name}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
