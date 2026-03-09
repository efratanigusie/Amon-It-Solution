import React, { useEffect, useState } from "react";
import ImageSliderAuto from "../Components/ImageSliderAuto";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SocialMediaLink from "../Components/SocialMedia";
import ClientSlider from "../Components/ClientSlide";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { RxDotFilled } from "react-icons/rx";

const Testimony = () => {

  const testimonials = [
    {
      id: 1,
      name: "Amhara police commission",
      comment:
        "Amon IT Solution responsiveness to urgent matters makes him one of the best network engineering teams you should consider.",
      avatar: "/assets/Testimony/amharapolice.jpg",
    },
    {
      id: 2,
      name: "GBZ Industrial Products Import",
      comment:
        "Not so long ago, I called on them to install anti-Virus. They acted within the agreed timeline and were very professional.",
      avatar: "/assets/Testimony/gebz.jpg",
    },
    {
      id: 3,
      name: "Vintage Technology PLC",
      comment:
        "They installed Anti-virus, CCTV systems, and security lights professionally and within the timeline.",
      avatar: "/assets/Testimony/vitage.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden flex-col">
      <Header />

      <div className="flex flex-col">
        <ImageSliderAuto />

        {/* Certification Slider */}
        <div className="mb-[10rem] mt-[5rem] flex flex-col">
          <h1 className="text-4xl font-bold text-center text-blueBlack">
            Top Certifications
          </h1>

          <hr className="h-[1rem] bg-orange-500 w-[50%] mx-[25%] rounded-[2rem] my-[3rem]" />

          <Slider {...settings} className="flex items-center ml-[5rem]">
            <img src="/assets/Certification/cer_1.jpg" alt="cert1" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            <img src="/assets/Certification/cer_2.jpg" alt="cert2" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            <img src="/assets/Certification/cer_3.jpg" alt="cert3" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            <img src="/assets/Certification/cer_4.jpg" alt="cert4" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            <img src="/assets/Certification/cer_5.jpg" alt="cert5" className="w-[20rem] h-[20rem] rounded-[4rem]" />
          </Slider>
        </div>

        {/* Testimonials */}
        <div className="w-full bg-blueBlack py-[4rem]">
          <h1 className="text-4xl font-bold text-center text-white">
            Testimonials
          </h1>

          <hr className="h-[1rem] bg-orange-500 w-[50%] mx-[25%] rounded-[2rem] my-[3rem]" />

          <div className="p-4 max-w-[70%] mx-auto">
            <div className="flex flex-wrap bg-white p-8 rounded-lg shadow">

              <motion.div
                className="flex flex-col items-center mb-4 w-2/5"
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="h-[17rem] w-[17rem] rounded-full"
                />

                <div className="text-sm font-medium text-gray-900 mt-2">
                  {testimonials[currentIndex].name}
                </div>
              </motion.div>

              <motion.div
                className="text-gray-800 w-3/5"
                initial={{ y: -200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                “{testimonials[currentIndex].comment}”
              </motion.div>

            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center py-2">
            {testimonials.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  slideIndex === currentIndex ? "text-black" : "text-gray-200"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="flex flex-col my-[3rem]">
          <h1 className="text-4xl font-bold text-blueBlack my-[2rem]">
            Clients:
          </h1>

          <ClientSlider />
        </div>

        <SocialMediaLink />
        <Footer />
      </div>
    </div>
  );
};

export default Testimony;