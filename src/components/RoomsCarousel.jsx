import React from "react";
import Slider from "react-slick";
import SingleRoom from "../assets/single-room.jpg";
import "./roomscarouselstyle.css";

export default function RoomsCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
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

  const roomTypes = [
    { img: SingleRoom, name: "Single Room" },
    { img: SingleRoom, name: "Double Room" },
    { img: SingleRoom, name: "Twin Room" },
    { img: SingleRoom, name: "Meeting Room" },
  ];

  return (
    <div className="section-container">
      <div className="section-title">
        <span className="small">Explore</span>
        <span className="big">Room Options</span>
      </div>
      <Slider {...settings} >
        {roomTypes.map((room) => (
          <div key={room.name} className="room-container">
            <img src={room.img} alt={room.name} className="room-img" />
            <p className="room-title">{room.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
