import React from "react";
import CarouselCompnent from "../components/homepage/LandingCarousel";
import RoomsCarousel from "../components/homepage/RoomsCarousel";
import Sightseeing from "../components/homepage/Sightseeing";

export default function Homepage() {
  return (
    <div>
      <CarouselCompnent />
      <RoomsCarousel />
      <Sightseeing />
    </div>
  );
}
