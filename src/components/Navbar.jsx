import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { Offcanvas } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import SingleRoom from "../assets/single-room.jpg";
import DoubleRoom from "../assets/double-room.jpg";
import TwinRoom from "../assets/twin-room.jpg";
import MeetingRoom from "../assets/meeting-room.jpg";
import "./navbar.css";
import Slider from "react-slick";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 2, // We'll adjust number with CSS if needed
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  };
  // --------------------------------------
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      label: "Rooms",
      link: "/",
    },
    {
      label: "Directions",
      link: "/",
    },
    {
      label: "Contact Us",
      link: "/",
    },
    {
      label: "Rooms",
      link: "/",
    },
    {
      label: "Directions",
      link: "/",
    },
    {
      label: "Contact Us",
      link: "/",
    },
  ];

  const roomTypes = [
    { img: SingleRoom, name: "Single Room", href: "/single-room" },
    { img: DoubleRoom, name: "Double Room", href: "/single-room" },
    { img: TwinRoom, name: "Twin Room", href: "/single-room" },
    { img: MeetingRoom, name: "Meeting Room", href: "/single-room" },
  ];

  return (
    <>
      <nav className={`navbar ${show ? "visible" : "hidden"}`}>
        <div className="nav-hamburger" onClick={() => setShowOffcanvas(true)}>
          <RxHamburgerMenu />
        </div>

        {/* <div>Logo</div> */}
        <button className="nav-cta">
          Book a Room
          {/* <FaArrowRightLong style={{ marginLeft: "10px", fill: "#ffc814" }} /> */}
        </button>
      </nav>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="top"
      >
        <Offcanvas.Header>
          <button
            onClick={() => setShowOffcanvas(false)}
            className="custom-close-btn"
            aria-label="Close"
          >
            <IoMdClose />
          </button>{" "}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="nav-items">
            {navItems.map((item) => (
              <span>{item.label}</span>
            ))}
          </div>
          <div className="nav-carousel-content">
            <div className="nav-carousel-title">
              <span className="title">
                Rooms <span className="and">&</span> Halls{" "}
              </span>
            </div>
            <Slider {...settings} className="nav-slider-container">
              {roomTypes.map((room) => (
                <div
                  key={room.name}
                  className="room-container"
                  onClick={() => {
                    navigate(room.href);
                    setShowOffcanvas(false);
                  }}
                >
                  <img src={room.img} alt={room.name} className="room-img" />
                  <p className="room-title">{room.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
