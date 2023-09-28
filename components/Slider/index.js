"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Slider hızı
    slidesToShow: 3, // Ekranda görünen öğe sayısı
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Otomatik kaydırma hızı
  };

  const sliderStyle = {
    background: "linear-gradient(to right, yellow, green, blue, red)", // Lineer gradienti burada tanımlayın
  };

  return (
    <div className="horizontal-slider h-16  " style={sliderStyle}>
      <Slider {...settings} className="flex align-items-center">
        <div className="ticker-item  ">BTC $26.277,10 (+%0,23)</div>
        <div className="ticker-item">ETH $1.595,31 (+%0,10)</div>
        <div className="ticker-item">OKB $42,78 (-%0,64)</div>
        <div className="ticker-item">LTC $63,44 (-%0,53)</div>
        <div className="ticker-item">XRP $0,50 (-%0,47)</div>
        <div className="ticker-item">BCH $228,28 (+%6,35)</div>
        <div className="ticker-item">SOL $18,98 (-%0,23)</div>
      </Slider>
    </div>
  );
};

export default HorizontalSlider;
