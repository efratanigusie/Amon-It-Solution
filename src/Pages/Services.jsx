import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ImageSliderAuto from "../Components/ImageSliderAuto";
import {motion} from 'framer-motion'
import Footer from "../Components/Footer";
import SocialMediaLink from "../Components/SocialMedia";
import ClientSlider from "../Components/ClientSlide";

export default function Services() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on page load
  }, []);
  
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mt-[10rem]">
        <div className="mb-[4rem]">
          <ImageSliderAuto/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[5rem]">
      <h1 className="text-4xl text-blueBlack font-bold">Our Services</h1>

        <div className="flex flex-wrap justify-evenly mt-[5rem] ">
              <div className="pr-[2rem]">
              <h1 className="text-center font-bold text-2xl text-orange-500">Consultancy Service</h1>
                <div className="w-[15rem] h-[15rem] rounded-full bg-gray-400 mt-[1.5rem]">
                    <img src="/assets/services/consult.png" alt="" />
                </div>
                </div> 
                <div className="pl-[2rem]">
                <h1 className="text-center font-bold text-2xl text-orange-500">IT Support and Training</h1>
                <div className="w-[15rem] h-[15rem] rounded-full bg-gray-400 mt-[1.5rem]">
                    <img src="/assets/services/support.png" alt="" />
                </div>
            
                </div> 

        </div>

        <div className="flex flex-col items-center justify-center mt-[5rem]">
         
        <motion.div
          className="flex flex-wrap justify-evenly p-[2rem]"
          initial={{
            x: -400,
            opacity: 0,
          }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] px-[3rem] py-[2rem] order-2 sm:order-2 ">
            <h1 className="text-orange-500 font-bold text-2xl ">
              Advanced CCTV System
            </h1>
            <p className="py-[2rem]">
              Our video surveillance technology installation service benefits
              Sectors to monitor publicly accessible areas such as lobbies,
              lounges or corridors in order to prevent any unauthorized access.
            </p>
            <p className="py-[2rem] ">
              Parking spaces are often included into video surveillance as most
              guests sleep better knowing that their car is securely stored
              under video surveillance
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 px-[1rem] py-[2rem] order-1 sm:order-2">
            <img
              src="/assets/Amon/Services/cctv.jpg"
              alt=""
              className="w-[30rem] h-[20rem]"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-evenly p-[2rem]"
          initial={{
            x: 400,
            opacity: 0,
          }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] p-[5rem] order-2 sm:order-1">
            <img
              src="/assets/services/netInf.jpg"
              alt=""
              className="w-[30rem] h-[20rem]"
            />
          </div>
          <div className="items-center w-full sm:w-1/2 md:w-1/2 px-[2rem] px-[3rem] py-[2rem] mt-[3rem] order-1 sm:order-2">
            <h1 className="text-orange-500 font-bold text-2xl ">
              Network Infrastructure
            </h1>
            <div className="flex flex-col">
              <h2 className="text-md mt-[1rem] font-semibold">VPN technology</h2>
              <p className="py-[1rem] ">
                Virtual private network (VPN) a service that helps you stays
                private online by encrypting the connection between your device
                and the internet.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-semibold"> ORACLE SUPPORT</h2>
              <p className="py-[1rem]">
                We will provide Oracle Support education and training for your
                team, along with sharing best practices, community support, and
                group events. We will also provide you any maintenance related
                to Oracle.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-evenly p-[2rem]"
          initial={{
            x: -400,
            opacity: 0,
          }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] px-[3rem] py-[2rem] order-2 sm:order-2 ">
            <h1 className="text-orange-500 font-bold text-2xl ">
              Modern Data Center Facility
            </h1>
            <p className="py-[2rem]">
              As an independent consultant, we have no affiliations with any
              particular brands, products, technologies or suppliers. We only
              work for the client, bringing objective, unbiased, cost-effective
              engineering design solutions. We regularly conduct industry and
              manufacturer surveys to stay ahead of developing trends and to
              future proof our own in-house criteria.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 px-[1rem] py-[2rem] order-1 sm:order-2">
            <img
              src="/assets/services/modDataCenter.jpg"
              alt=""
              className="w-[30rem] h-[20rem]"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-evenly p-[2rem]"
          initial={{
            x: 400,
            opacity: 0,
          }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] p-[5rem] order-2 sm:order-1">
            <img
              src="/assets/services/soft_dev.jpg"
              alt=""
              className="w-[30rem] h-[20rem]"
            />
          </div>
          <div className="items-center w-full sm:w-1/2 md:w-1/2 px-[2rem] px-[3rem] py-[2rem] mt-[3rem] order-1 sm:order-2">
            <h1 className="text-orange-500 font-bold text-2xl ">
              Software Development
            </h1>
            <div className="flex flex-col">
              <p className="py-[1rem]">
                <h2 className="text-md mt-[1rem] ">LMIS</h2>
                <h2 className="text-md mt-[1rem] ">Transportation</h2>
                <h2 className="text-md mt-[1rem] ">Website Design</h2>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      <div className="Slider flex flex-col mb-[3rem]">
        <h1 className="text-4xl mb-[1rem] font-bold text-blueBlack">Clients:</h1>
        <ClientSlider/>
      </div>

      <div>
        <SocialMediaLink/>
      </div>

        <Footer/>
    </div>
  );
}
