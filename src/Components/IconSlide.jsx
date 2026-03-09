import React, { useState, useEffect } from "react";
import "./SlidingImage.css";

const Slide = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };

  }, [currentIndex, images.length, interval]);

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="sliding-image-container">
      <button className="sliding-image-button" onClick={handlePrevious}>
        &lt;
      </button>
      <div className="sliding-image-wrapper">
        {visibleImages.map((image, index) => (
          <div  key={index} className="w-[10rem] h-[10rem] flex flex-wrap">
            <img
            className="sliding-image w-[10rem] h-[10rem]"
            src={image}
            alt="Sliding Image"
          />
          </div>
        ))}
      </div>
      <button className="sliding-image-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Slide;
