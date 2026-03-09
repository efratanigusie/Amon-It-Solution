import { React, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import ImageSliderAuto from "../Components/ImageSliderAuto";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SocialMediaLink from "../Components/SocialMedia";
import ClientSlider from "../Components/ClientSlide";
import { motion } from 'framer-motion'
import Slider from 'react-slick';


const Testimony = () => {
  const slides = [
    {
      url: "/assets/Certification/1.jpg",
    },
    {
      url: "/assets/Certification/2.jpg",
    },
    {
      url: "/assets/Certification/3.jpg",
    },
    {
      url: "/assets/Certification/4.jpg",
    },
    {
      url: "/assets/Certification/5.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Amhara police commission',
      
      comment:
        'Amon IT Solution ple is responsiveness to urgent matters makes him one of the best network engineering you should consider having. Despite the tendency of network engineering to change of Supply, Installation, configuration, testing and maintenance of successful implementation of datacenter network, WIFI,security and consultancy, he and his colleague did the best job at Amhara region president office during the war between ethiopian government and tplf by implimenting secure datacenter network, WIFI security and consultancy and by prepare secure situation room,Gashaw he sticks what you agreed at the beginning to the end and help the amahar people and ethiopia form the tplf invasion.',
      avatar: '/assets/Testimony/amharapolice.jpg',
    },
    {
      id: 2,
      name: 'GBZ Industrial Products Import',
      comment:
        `Not so long ago, I called on them to install anti-Virus, Not only did they do so with the almost professionalism, but also acted within the initially agreed-upon timelines. Need I add that their services were the most affordable out of the ones that we had.

        Please feel free to contact me if you need additional information or perspective.'`,

      avatar: '/assets/Testimony/gebz.jpg',
    },
    {
      id: 3,
      name: 'Vintage  Technology plc'
      ,
      
      comment:
        `Not so long ago, I called on them to install anti-Virus, CCTV systems, and security lights to my Company. Not only did they do so with the almost professionalism, but also acted within the initially agreed-upon timelines. Need I add that their services were the most affordable out of the ones that we had.

        While sourcing for an IT company to handle the task. I sought reviews of past clients. Out of the ten reviews I received, an overwhelming eight spoke in favor of this firm! By placing your bet on this firm, you stand to join a long list of happy clients.
        
        Please feel free to content me if you need additional information perspective. Yours truly,'`,

      avatar: '/assets/Testimony/vitage.jpg',
    },
    {
      id: 4,
      name: 'Amhara National Regional State Police Commision',
      
      comment:
        ` As per the request of our institution, AMON IT Solution has contributed to excel information technology infrastructure based on their profession particularly on Network configuration and development, maintenance, datacenter establishment, security room

        development as well as capacity development for our staffs to manage the system
        
        Sustainability.
        
        Therefore, we are confidentially recommending him based on their contribution to the institution, team spirit and willingness to serve the public'`,

      avatar: '/assets/Testimony/Amhara.jpg',
    },
    {
      id: 5,
      name: 'Qemer Software Technology PLC',
      
      comment:
        `I am happy to recommend Amon IT Solution to you the high-quality services of Amon. We get a 24-hours service. The prices are also very reasonable compared to other provider in the market.

        The reputation of the services of Amon IT Solution has grown to be quite high. There was hardly any complaint from us. The Network has never been interrupted because of technical reasons.
        
        I strongly recommend Amon IT Solution for your office and personal use. Please feel free to contact me if you need additional information perspective. Yours truly,
        
        Kindly consider them for your IT installation tasks!'`,

      avatar: '/assets/Testimony/qumar.jpg',
    },
    {
      id: 6,
      name: 'Amhara National Regional State Peace & Security Affairs',
      
      comment:
        `Ammon IT Solution has supported our company throughout the years and we are confident about

        the services of Ammon IT we can surely recommend them for any ICT-related services and projects. Ammon IT Solution is currently designing our new Data Centre and Supply, Installation.
        
        configuration, testing, and maintenance of a successful implementation network system. I strongly recommend Ammon IT Solution as any technology-dependent company's first-line service and support provider.'`,

      avatar: '/assets/Testimony/peaceandsecurity.jpg',
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Automatically slide to the next image every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden flex-col">
      <div>
        <Header />
      </div>

      <div className="flex flex-col">
        <ImageSliderAuto />
        <div className='mb-[10rem] mt-[5rem] flex flex-col'>
          <h1 className='text-4xl font-bold text-center text-blueBlack'>Top Certifications</h1>
          <hr className='h-[1rem] bg-orange-500 w-[50%] mx-[25%] rounded-[2rem] my-[3rem]'/>

          <Slider {...settings} className="flex items-center ml-[5rem]">
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_1.jpg" alt=" partner1" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_2.jpg" alt=" partner2" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]" >
              <img src="/assets/Certification/cer_3.jpg" alt=" partner4" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_4.jpg" alt=" partner3" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_5.jpg" alt=" partner5" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_6.jpg" alt=" partner6" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_7.jpg" alt=" partner3" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_8.jpg" alt=" partner5" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
            <div className="w-[20rem] h-[20rem] rounded-[4rem]">
              <img src="/assets/Certification/cer_9.jpg" alt=" partner6" className="w-[20rem] h-[20rem] rounded-[4rem]" />
            </div>
          </Slider>

        </div>
        <div className="w-full py-4 relative group bg-blueBlack py-[4rem]">
        <h1 className='text-4xl font-bold text-center text-white'>Testimonials</h1>
          <hr className='h-[1rem] bg-orange-500 w-[50%] mx-[25%] rounded-[2rem] my-[3rem]'/>
          <div className="p-4 max-w-[70%] h-[70%] w-[70%] mx-[15%] ">
            <div className="flex flex-wrap bg-white p-8 rounded-lg shadow">
              <motion.div className="flex flex-col items-center mb-4 w-2/5"
                initial={{
                  y: 200,
                  opacity: 0
                }}
                whileInView={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="h-[17rem] w-[17rem] rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
              <motion.div className="text-gray-800 w-3/5"
                initial={{
                  y: -200,
                  opacity: 0,
                  rotate: 30
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  rotate: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}>
                &ldquo;{testimonials[currentIndex].comment}&rdquo;
              </motion.div>
            </div>
          </div>
          <div className="flex top-4 justify-center py-2">
            {testimonials.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-black' : 'text-gray-200'
                  } hover:text-black -mt-[3rem]`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        <div className="Slider flex flex-col my-[3rem]">
          <h1 className="text-4xl font-bold text-blueBlack my-[2rem]">
            Clients:
          </h1>
          <ClientSlider />
        </div>

        <div>
          <SocialMediaLink />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Testimony;
