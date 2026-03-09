import React, { useEffect, useState } from 'react';

const ImageSliderAuto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


const slides=[
       {
        url:"./assets/Hero/amon_1.jpg"
       },
    
       {
        url:"./assets/Hero/amon_2.jpg"
       },
       {
        url:"./assets/Hero/amon_3.jpg"
       },
  ]

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically slide to the next image every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[450px] w-full m-auto py-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col justify-center items-center">
      </div>
    </div>
  );
};

export default ImageSliderAuto;