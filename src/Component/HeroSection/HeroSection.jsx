import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const banners = [banner1, banner2];

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="w-full max-w-[1200px] mx-auto px-4 rounded-xl">
        <Slider {...settings}>
          {banners.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`banner-${i}`}
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
