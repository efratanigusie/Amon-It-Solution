import React, { useEffect, useState } from 'react';

const ImageSliderAuto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "./assets/Hero/amon_1.jpg" },
    { url: "./assets/Hero/amon_2.jpg" },
    { url: "./assets/Hero/amon_3.jpg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="max-w-[1400px] h-[450px] w-full m-auto py-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col justify-center items-center"
      ></div>
    </div>
  );
};

export default ImageSliderAuto;