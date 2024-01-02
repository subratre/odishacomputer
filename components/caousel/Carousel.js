import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import ArrowPrev from "../arrow/ArrowPrev";
import ArrowNext from "../arrow/ArrowNext";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1.5,
    margin: 5,
  },
  768: {
    items: 3,
    margin: 10,
  },
  1024: {
    items: 1,
    margin: 20,
  },
};

const Carousel = () => {
  return (
    <OwlCarousel
      responsive={Responsive}
      loop={true}
      autoplay
      dots={false}
      nav={true}
      navText={[
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ]}
      className="owl-carousel owl-theme"
    >
      <div className="item">
        <img src="/images/carousel/one.jpg" />
      </div>
      <div className="item">
        <img src="/images/carousel/two.jpg" />
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
