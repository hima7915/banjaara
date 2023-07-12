import React, { useState, useEffect } from "react";
import "./imagecarousel.css";

const image1 = require("../carousel-images/ci1.png");
const image2 = require("../carousel-images/ci2.png");

export default function ImageCarousel() {
  const images = [image1, image2];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner carousel-fade">
        <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
          <img className="d-flex m-auto p-2" src={images[0]} alt="First slide" />
        </div>
        <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
          <img className="d-flex m-auto p-2" src={images[1]} alt="Second slide" />
        </div>
      </div>
    </div>
  );
}
