import React, { useState } from "react";
import Place1 from "../../assets/place1.jpg";
import "./homepage.css";

export default function Sightseeing() {
  const [openIndex, setOpenIndex] = useState(0);
  const cardsArr = [
    { img: Place1 },
    { img: Place1 },
    { img: Place1 },
    { img: Place1 },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? openIndex : index);
  };

  return (
    <div className="card-section-container">
      <div className="card-container">
        {cardsArr.map((card, idx) => (
          <div
            key={idx}
            className={`card ${openIndex === idx ? "open" : ""}`}
            onClick={() => handleClick(idx)}
          >
            <img src={card.img} className="card-img" />
            <div
              className={`card-content-container ${
                openIndex === idx ? "visible" : ""
              }`}
            >
              <div className="card-content-content">
                <h1 className="card-header">Lorem Ipsum</h1>
                <p className="card-paragraph">
                  Nujuma, a Ritz-Carlton Reserve is rooted in rich cultural
                  traditions, pristine natural beauty and flavors as vivid as
                  the sea itself.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
