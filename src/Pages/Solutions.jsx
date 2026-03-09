import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/ImageSlider";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import SocialMediaLink from "../Components/SocialMedia";
import ClientSlider from "../Components/ClientSlide";

export default function Solutions() {
  const slides = [
    {
      url: "/assets/consultancy.jpg",
    },
    {
      url: "/assets/cyberSecurity_2.jpg",
    },
    {
      url: "/assets/IT-Support.jpeg",
    },
    {
      url: "/assets/camera_1.jpg",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex flex-col items-center justify-center mt-[13rem]">
        <h1 className="text-4xl font-bold">Our Solutions</h1>
        <div className="px-[2rem] px-[3rem] py-[2rem] w-full flex items-center justify-center">
          <ImageSlider slides={slides} />
        </div>
      </div>
      <div className="flex flex-wrap">
        
        <motion.div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem] items-center"
        initial={{
              x: 200,
              rotate: -30,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,

              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          
          >
          <img
            src="./assets/solutions/ba.png"
            alt=""
            className="w-[8rem] h-[8rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
          />
          <h1 className="text-2xl items-center text-center font-bold">Business Automation</h1>
          <p>
            To be a nationally and regionally prominent communications, security
            and ICT solutions provider known for high professional competency.
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem] items-center"
        initial={{
              x: 200,
              rotate: -30,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,

              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}>
          
          <img
            src="./assets/solutions/ens.png"
            alt=""
            className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
          />
          <h1 className="text-2xl items-center font-bold text-center">Enterprise Network Service</h1>
          <p>
            To be a nationally and regionally prominent communications, security
            and ICT solutions provider known for high professional competency.
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem] items-center"
        initial={{
              x: -200,
              rotate: 30,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,

              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}>
          
          <img
            src="./assets/solutions/itst.png"
            alt=""
            className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
          />
          <h1 className="text-2xl items-center font-bold text-center">IT support and training</h1>
          <p>
            To be a nationally and regionally prominent communications, security
            and ICT solutions provider known for high professional competency.
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem] items-center"
        initial={{
              x: 200,
              rotate: -30,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,

              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}>
          
          <img
            src="./assets/solutions/mdcc.png"
            alt=""
            className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
          />
          <h1 className="text-2xl items-center font-bold text-center">Modern Data Center and Cloud</h1>
          <p>
            To be a nationally and regionally prominent communications, security
            and ICT solutions provider known for high professional competency.
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem] items-center"
        initial={{
              x: 200,
              rotate: -30,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,

              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}>
          
          <img
            src="./assets/solutions/sd.png"
            alt=""
            className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
          />
          <h1 className="text-2xl items-center text-center font-bold">Software development</h1>
          <p>
          Amon It Solution is a Software Development Company.Our dedicated purpose is to provide Lmis, transportation and website design
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem] items-center"
        initial={{
              x: -200,
              rotate: 30,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,

              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}>
          
          <img
            src="./assets/camera_1.jpg"
            alt=""
            className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
          />
          <h1 className="text-2xl items-center font-bold text-center">ADVANCED CCTV SYSTEM</h1>
          <p>
            To be a nationally and regionally prominent communications, security
            and ICT solutions provider known for high professional competency.
          </p>
        </motion.div>
        
      </div>
      <div className="flex flex-col items-center mt-[4rem]">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <div className="relative z-10 flex flex-wrap mx-[3rem] mb-[10rem] mt-[3rem] pt-[2rem] pb-[5rem] bg-white justify-center items-center">
          <motion.div
            className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 px-[1rem]"
            initial={{
              x: -200,
              rotate: -45,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.5,
              },
            }}
          >
            <img
              src="./assets/services/consult.png"
              alt=""
              className="w-[8rem] h-[8rem] rounded-full"
            />
            <h1 className="text-2xl items-center my-[1rem] font-bold">
              Consulting
            </h1>
            <p className="text-center">
              As an independent consultant, we have no affiliations with any
              particular brands, products, technologies or suppliers. We only
              work for the client, bringing objective, unbiased, cost-effective
              engineering design solutions. We regularly conduct industry and
              manufacturer surveys to stay ahead of developing trends and to
              ‘future proof’ our own in-house criteria.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 px-[1rem]"
            initial={{
              x: 200,
              rotate: -30,
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              y: 0,
              scale: 1,

              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <img
              src="./assets/services/soft_dev.jpg"
              alt=""
              className="w-[8rem] h-[8rem] rounded-full"
            />
            <h1 className="text-2xl items-center my-[1rem] font-bold">
              Software Development
            </h1>
            <p className="text-center">
              Amon It Solution is a Software Development Company.Our dedicated purpose is to
              provide Lmis, transportation  and website design 
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 px-[1rem] h-[20rem]"
            initial={{
              x: -700,
              opacity: 0,
            }}
            whileInView={{
              opacity: 3,
              x: 0,
              scale: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <img
              src="./assets/services/support.png"
              alt=""
              className="w-[8rem] h-[8rem] rounded-full"
            />
            <h1 className="text-2xl my-[1rem] font-bold">
            IT Support and Training
            </h1>
            <p className="text-center">
              Is your business growing but not yet have IT department? Do you
              need dedicated IT/ELV professional to look after your systems? Do
              you need regular maintenance for your IT/ELV systems? If you
              answer YES, our Maintenance/Support Services is the right solution
              for your growing business.
            </p>
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
