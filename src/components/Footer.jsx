import React from "react";
import Logo from "../assets/logo.svg";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./footer.css";

export default function Footer() {
  const infoItems = [
    { text: "About Us", link: "/" },
    { text: "Rooms", link: "/" },
  ];

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="logo-column">
          <img src={Logo} alt="Pallashotel Logo" className="logo" />
          {/* <p className="logo-text">
            Experience Classy Luxury at Afforadble Prices
          </p> */}
          {/* <button className="logo-cta">
            Book Now
            <FaArrowRightLong style={{ marginLeft: "10px", fill: "#ffc814" }} />
          </button> */}
        </div>
        <div className="location-column">
          <h1 className="location-title">Location & Number</h1>
          <span className="number">06221 87288-0</span>
          <span className="location">
            Zentral in Darmstadt nahe zur Innenstadt
          </span>
          <span className="post">Pallaswiesenstraße 72, 64293 Darmstadt</span>
        </div>
        <div className="info-column">
          <h1 className="info-title">Info</h1>
          {infoItems.map((item) => (
            <span>{item.text}</span>
          ))}
          <div className="info-icons">
            <FaInstagram className="icon" />
            <FaFacebook className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
