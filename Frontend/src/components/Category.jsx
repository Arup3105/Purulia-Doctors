import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";

function Category() {
  const img = ["a", "b", "c", "d", "e", "f"];
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesToShow based on the window width
      if (window.innerWidth <= 768) {
        setSlidesToShow(3); // Show 3 slides on mobile devices
      } else {
        setSlidesToShow(6); // Show 6 slides on larger screens (PC)
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial value
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    autoplay: true, 
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="category">
      <div className="label">Doctor by category</div>
      <div className="element">
        <Slider {...settings}>
          {img.map((value, index) => (
            <div key={index}>
              <div className="card">
                <p>{value}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Category;
