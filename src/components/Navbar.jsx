import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Offcanvas } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
