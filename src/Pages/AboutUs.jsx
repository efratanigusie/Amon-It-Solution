import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/ImageSlider";
import ImageSliderAuto from "../Components/ImageSliderAuto";
import Footer from "../Components/Footer";
import SocialMediaLink from "../Components/SocialMedia";

import BrandSlider from "../Components/PartnerSlide";

export default function AboutUs() {
  const slides_2 = [
    {
      url: "/assets/DataCenter.jpg",
      info: "Data Center",
    },
    {
      url: "/assets/Smartinfra.jpg",
      info: "Smart Infrastructure",
    },
    {
      url: "/assets/System-Integration.jpeg",
      info: "System integration",
    },
    {
      url: "/assets/networkService.jpg",
      info: "Network Service",
    },
  ];

  return (
    <div className=" overflow-hidden">
      <Header />
      <div className="flex flex-col items-center justify-center mt-[10rem]">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] p-[5rem] order-2 sm:order-2">
            <h1 className="text-4xl font-bold text-orange-500">
              About Amon It Solution
            </h1>
            <p className="py-[2rem]">
              AMON ICT SOLUTIONS P.L.C is founded by enthusiastic ICT Service
              provider who first started with the ambition of tapering the vast
              ICT problems in Ethiopia. Working its way through concentrating on
              solutions over the past Four plus years, categorizes it as one of
              the progressive service providers in the country.
            </p>
            <p className="py-[1rem]">
              The company has more than what it takes to reach the cutting edge
              ICT world with its internationally trained(CCNA,CCNP and security
              device certified) innovative team who are dedicated to provide
              fast & high end solutions to customers. The company has recently
              branded itself introducing different new Western IT Technologies
              to our country which we believe advances the industry further.
            </p>
            <button className="w-[25%] h-[3rem] bg-blueBlack text-white rounded-[2rem]">
              <a href="/about" download="assets/Company Profile.pdf">Commpany Profile</a>
            </button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] p-[5rem] order-1 sm:order-2">
            <ImageSlider slides={slides_2} />
          </div>
        </div>
      </div>

      <div className="mb-[4rem]">
        <ImageSliderAuto />
      </div>

      <div className="flex flex-wrap justify-evenly bg-blueBlack py-[2rem]">
        <div className="flex flex-col w-[30%]"> 
          <img src="/assets/photo_2023-11-06_14-57-11.jpg" alt="" />
        </div>

        <div className="flex flex-col w-[45%]">
          <h1 className="text-3xl font-bold my-[2rem] text-white">
            CEO'S STATEMENT
          </h1>
          <hr className="w-[50%] mx-[25%] my-[1rem] border-[0.6rem] border-orange-500 rounded-[10px]" />
          <h1 className="text-1xl font-bold text-orange-500 mb-[1rem]">
            Dear Customer:
          </h1>
          <p className="text-white">
            AMON is simply a learning organization with continuous improvement.
            Our team are self-motivated and passionate about their career and
            purpose in life. Everyone at AMON strives to achieve result with
            best performance everyday. Confidence of clients on us due to our
            commitment to get the job done with excellence is what drives us to
            do better everyday. We are not in the business of making quick money
            by chasing obvious opportunities and short cuts. In fact, we already
            chose to win through difficult situations with hard work,
            competence, consistency and integrity. We lead the market by
            creating disciplined culture that will have much bigger effect on
            the work ethics of our society and overall technological development
            of Ethiopia in long term.
          </p>

          <h1 className="text-1.5xl text-orange-300">General Manager</h1>
        </div>
      </div>

      <div className="my-[4rem] mx-[4rem]">
        <h1 className="text-3xl text-blueBlack text-center font-bold my-[2rem]">AMON at a Glance</h1>
        <h1 className="text-1xl font-bold text-orange-500 mb-[1rem]"></h1>
        <div className="flex flex-wrap justify-evenly align-evenly">
          
          <div className=" flex flex-col items-center w-[20rem] mb-[2rem]">
            <img src="/assets/glance/glance_1.jpg" alt="" className="w-[8rem] h-[8rem] rounded-full mb-[2rem]" />
            <p className="text-center text-blueBlack">
              Ethiopian Owned Company with 4+ Years Service Oriented Solution
              Provider
            </p>
          </div>

          <div className=" flex flex-col items-center w-[20rem] mb-[2rem]">
             <img src="/assets/glance/glance_2.jpg" alt="" className="w-[8rem] h-[8rem] rounded-full mb-[2rem]" />
            <p className="text-center text-blueBlack">
              Founded by Eng. Shumete Getu and Located at Addis Ababa, Ethiopia
            </p>
          </div>

          <div className=" flex flex-col items-center  w-[20rem] mb-[2rem]">
            <img src="/assets/glance/glance_3.jpg" alt="" className="h-[8rem] w-[8rem] rounded-full mb-[2rem]" />
            <p className="text-center text-blueBlack">
              Provide End to End It Services to Meet Customer Requirements
            </p>
          </div>

          <div className=" flex flex-col items-center  w-[20rem] mb-[2rem]">
             <img src="/assets/glance/glance_4.jpg" alt="" className="w-[8rem] h-[8rem] rounded-full mb-[2rem]" />
            <p className="text-center text-blueBlack">
              50+ Employees, Certified and Commited to Best Practices 
            </p>
          </div>

          <div className=" flex flex-col items-center  w-[20rem] mb-[2rem]">
            <img src="/assets/glance/glance_5.jpg" alt="" className="h-[8rem] w-[8rem] rounded-full mb-[2rem]" />
            <p className="text-center text-blueBlack">
              Good Annual Revenu
            </p>
          </div>

          <div className=" flex flex-col items-center  w-[20rem] mb-[2rem]">
            <img src="/assets/glance/glance_6.jpg" alt="" className="h-[8rem] w-[8rem] rounded-full mb-[2rem]" />
            <p className="text-center text-blueBlack">
              A Leading Player in Enterprise IT Market with 30+ Completed Projects
            </p>
          </div>
        </div>
      </div>
      <div className="Slider flex flex-col mb-[3rem]">
        <h1 className="text-4xl mb-[1rem] font-bold text-blueBlack">Partners:</h1>
        <BrandSlider/>
      </div>

      <div>
        <SocialMediaLink />
      </div>

      <Footer />
    </div>
  );
}
