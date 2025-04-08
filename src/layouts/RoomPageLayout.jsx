import Slider from "react-slick";
import Img1 from "../assets/1.jpg";
import DoubleRoom from "../assets/double-room.jpg";
import TwinRoom from "../assets/twin-room.jpg";
import MeetingRoom from "../assets/meeting-room.jpg";
import { Col, Container, Row } from "react-bootstrap";
import space from "../assets/space.svg";
import ac from "../assets/ac.svg";
import bed from "../assets/bed.svg";
import tv from "../assets/tv.svg";
import Balcon from "../assets/balcony.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import "./roompagelayout.css";
import { useNavigate } from "react-router";

export default function RoomPageLayout() {
  return (
    <div>
      <IntroSection />
      <CarouselSection />
      <EnjoySection />
      <RelatedSection />
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
            <span className="backdrop">Private Luxury</span>
          </Col>
          <Col md={6} sm={12} className="sub-intro--paragraph">
            <p>
              More than just a room— your personal escape. Relax in a modern
              space with premium bedding, elegant touches, and everything you
              need to unwind in peace.
            </p>
          </Col>
        </Row>
        <Row className="grid-row" style={{ marginTop: "6rem" }}>
          <Col xs={6} sm={6} md={4} lg={3} className="sub-intro--icon-block">
            <img src={space} className="icon" />
            <span className="icon-text">10 - 15&#13217;</span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3} className="sub-intro--icon-block">
            <img src={bed} className="icon" />
            <span className="icon-text">10 - 15&#13217;</span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3} className="sub-intro--icon-block">
            <img src={ac} className="icon" />
            <span className="icon-text">10 - 15&#13217;</span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3} className="sub-intro--icon-block">
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
    // arrows: true,
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
        style={{ maxHeight: "630px", overflow: "hidden", position: "relative" }}
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

function EnjoySection() {
  const featuresArr = [
    "Everything is automated, you can open doors with our app",
    "Checking in and out can be done through our app too",
    "Enjoy High Quality Service",
  ];

  return (
    <div className="enjoy-container">
      <Container fluid className="enjoy-sub-container">
        <Row className="grid-row">
          <Col md={6} sm={12} className="enjoy-img">
            <img src={Balcon} alt="image" />
            <div className="frame"></div>
          </Col>
          <Col md={6} sm={12} className="enjoy-description">
            <h1 className="enjoy-header">
              <span className="colored">Your Comfort</span>
              <span className="white">Our Priority</span>
            </h1>
            <p className="enjoy-paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <ul className="enjoy-features">
              {featuresArr.map((feature) => (
                <li key={feature} className="enjoy-feature">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="enjoy-btn">
              Book a Room
              <FaArrowRightLong
                style={{ marginLeft: "10px", fill: "#ffc814" }}
              />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function RelatedSection() {
  const navigate = useNavigate();

  const relatedArr = [
    { img: DoubleRoom, title: "Double Room", href: "/single-room" },
    { img: TwinRoom, title: "Twin Room", href: "/single-room" },
    { img: MeetingRoom, title: "Meeting Room", href: "/single-room" },
  ];

  return (
    <div className="related-section-container">
      <div className="related-section-content">
        <div className="related-section-title">
          {/* <h1>You Can Also Enjoy Our</h1> */}
          <h1>Discover Our</h1>
          <span>Rooms & Halls</span>
        </div>
        <Container fluid className="related-rooms">
          <Row>
            {relatedArr.map((room) => (
              <Col
                key={room.title}
                className="related-room"
                xs={12}
                sm={6}
                lg={4}
                onClick={() => navigate(room.href)}
              >
                <img src={room.img} className="room-img" />
                <p className="room-title">{room.title}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
