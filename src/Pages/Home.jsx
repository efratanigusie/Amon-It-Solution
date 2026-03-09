import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/ImageSlider";
import Map from "../Components/Map";
import MessageForm from "../Components/MessageForm";
import SocialMediaLink from "../Components/SocialMedia";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import PartnerSlider from "../Components/PartnerSlide";
export default function Home() {
  const slides = [
    {
      url: "/assets/consultancy.jpg",
    },
    {
      url: "/assets/cyberSecurity_2.jpg",
    },
    {
      url: "/assets/Amon/Services/cctv.jpg",
    },
    {
      url: "/assets/camera_1.jpg",
    },
  ];

  const slides_2 = [
    {
      url: "/assets/Amon/About/dataCenter.jpg",
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

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on page load
  }, []);


  return (
    <div className="overflow-hidden">
      <div className="relative w-full">
        <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full">
          <img src="/assets/Hero/lock.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Header  */}
        <header>

          <Header className="absolute top-[4rem] right-[10rem]" />
        </header>

        {/* Main or Hero section  */}
        <main
          className="bg-contain bg-cover flex flex-col justify-center items-center py-8 min-h-screen relative"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="absolute text-7xl text-white font-bold top-[40%] right-[8%] text-center">AMON IT</h1>
            <h1 className="absolute text-7xl text-white font-bold top-[50%] right-[8%] text-center">SOLUTIONS</h1>
          </div>

          <motion.h1 className="absolute top-[82%] left-[8%] text-2xl font-bold text-white"
            initial={{
              x: -400,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 3,
              delay: 1
            }}

          >"SECURITY IS OUR IDENTITY"</motion.h1>
          <hr className="absolute top-[80%] left-[8%] h-[1rem] rounded-[5px] w-[50%] bg-orange-500 my-[3rem]" />
        </main>
      </div>

      {/* Top 3 rules */}
      <div className="relative z-10 flex flex-wrap mx-[3rem] mb-[10rem] -mt-[3rem] pt-[2rem] pb-[5rem] text-white justify-center items-center bg-blueBlack">
        <motion.div
          className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 px-[1rem]"
          initial={{
            x: 400,
            opacity: 0,
          }}
          viewport={{ once: true }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}>
          <img
            src="./assets/Amon/vision.jpg"
            alt=""
            className="w-[5rem] h-[5rem] rounded-full"
          />
          <h1 className="text-2xl items-center my-[1rem]">Vision</h1>
          <p className="text-center">
            Serving the whole country, also Building a well-informed and mature
            generation in Ethiopia's information technology sector.
          </p>
        </motion.div >

        <motion.div
          className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 px-[1rem]"
          initial={{
            x: -400,
            opacity: 0,
            rotate: 45
          }}
          viewport={{ once: true }}
          animate={animate ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.5,

          }}>
          <img
            src="./assets/Amon/mission.jpg"
            alt=""
            className="w-[5rem] h-[5rem] rounded-full"
          />
          <h1 className="text-2xl items-center my-[1rem]">Mission</h1>
          <p className="text-center">
            Utilize a national culture that relies technology as a working
            principle in Ethiopia
          </p>
        </motion.div >

        <motion.div
          className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 px-[1rem]"
          initial={{
            x: -400,
            opacity: 0,
          }}
          viewport={{ once: true }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <img
            src="./assets/Amon/values.jpg"
            alt=""
            className="w-[5rem] h-[5rem] rounded-full"
          />
          <h1 className="text-2xl items-center my-[1rem] ">Values</h1>
          <ul>
            <li className="text-center">-Professionalism with discipline Exemplary work Ethics</li>
            <li className="text-center">-Embracing Continuous Improvement</li>
            <li className="text-center">-Maximize customer satisfaction</li>
            <li className="text-center">-Create a trust environment</li>
          </ul>
        </motion.div>
      </div>

      {/* ***********************  about us section *****************************/}
      <div className="flex flex-col items-center justify-center  pt-[3rem]">
        <h1 className="text-4xl font-bold text-blueBlack">About Us</h1>
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] p-[5rem] order-2 sm:order-2">
            <p className="py-[2rem] text-blueBlack ">
              AMON ICT SOLUTIONS P.L.C is founded by enthusiastic ICT Service
              provider who first started with the ambition of tapering the vast
              ICT problems in Ethiopia. Working its way through concentrating on
              solutions over the past Four plus years, categorizes it as one of
              the progressive service providers in the country.
            </p>
            <p className=" py-[2rem] text-blueBlack ">
              The company has more than what it takes to reach the cutting edge
              ICT world with its internationally trained(CCNA,CCNP and security
              device certified) innovative team who are dedicated to provide
              fast & high end solutions to customers. The company has recently
              branded itself introducing different new Western IT Technologies
              to our country which we believe advances the industry further.
            </p>
            <button className="w-[25%] h-[3rem] bg-blueBlack text-white rounded-[2rem]"><a href="./about">Read More</a></button>

          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] p-[5rem] order-1 sm:order-2">
            <ImageSlider slides={slides_2} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[5rem]">
        <h1 className="text-4xl text-blueBlack font-bold">Our Services</h1>
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
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] py-[2rem] order-2 sm:order-2 ">
            <h1 className="text-orange-500 font-bold text-2xl ">
              Advanced CCTV System
            </h1>
            <p className="py-[2rem] ">
              Our video surveillance technology installation service benefits
              Sectors to monitor publicly accessible areas such as lobbies,
              lounges or corridors in order to prevent any unauthorized access.
            </p>
            <p className="py-[2rem]">
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
              <p className="py-[1rem] ">
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
              src="./assets/services/modDataCenter.jpg"
              alt=""
              className="w-[30rem] h-[20rem]"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-between p-[2rem]"
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
                <h2 className="text-md mt-[1rem]">LMIS</h2>
                <h2 className="text-md mt-[1rem]">Transportation</h2>
                <h2 className="text-md mt-[1rem]">Website Design</h2>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center bg-blueBlack py-[3rem]">
        <h1 className="text-4xl font-bold text-white">Our Solutions</h1>
        <div className="px-[2rem] px-[3rem] py-[2rem] w-full flex items-center justify-center">
          <ImageSlider slides={slides} />
        </div>
        <div className="flex flex-col items-center justify-center mt-[10rem]">
          <h1 className="text-3xl font-bold text-white text-center">
            {" "}
            What We Do ?
          </h1>
          <div className="flex flex-wrap pl-[2.5rem] justify-evenly items-center mt-[4rem]">
            <div className="flex flex-col w-[15rem] h-[20rem]  items-center">
              <img
                className="w-[10rem] h-[10rem]"
                src="/assets/solutions/ens.png"
                alt=""
              />
              <h1 className="text-2xl font-bold text-orange-500 text-center">
                01
              </h1>
              <a href="/solutions">

                <h1 className="text-2xl font-bold text-white text-center">
                  Enterprise
                </h1>
                <h1 className="text-2xl font-bold text-white text-center">
                  Network Service
                </h1>
              </a>
            </div>
            <div className="flex flex-col w-[15rem] h-[20rem] items-center">
              <img
                className="w-[10rem] h-[10rem]"
                src="/assets/solutions/mdcc.png"
                alt=""
              />
              <h1 className="text-2xl font-bold text-orange-500 text-center">
                02
              </h1>
              <a href="/solutions">
                <h1 className="text-2xl font-bold text-white text-center">
                  Modern Data
                </h1>
                <h1 className="text-2xl font-bold text-white text-center">
                  Center and Cloude
                </h1>
              </a>
            </div>
            <div className="flex flex-col w-[15rem] h-[20rem]  items-center">
              <img
                className="w-[10rem] h-[10rem]"
                src="/assets/solutions/sd.png"
                alt=""
              />
              <h1 className="text-2xl font-bold text-orange-500 text-center">
                03
              </h1>
              <a href="/solutions">
                <h1 className="text-2xl font-bold text-white text-center">
                  Software
                </h1>
                <h1 className="text-2xl font-bold text-white text-center">
                  Development
                </h1>
              </a>
            </div>
            <div className="flex flex-col w-[15rem] h-[20rem] items-center">
              <img
                className="w-[10rem] h-[10rem]"
                src="/assets/solutions/ba.png"
                alt=""
              />
              <h1 className="text-2xl font-bold text-orange-500 text-center">
                04
              </h1>
              <a href="/solutions">
                <h1 className="text-2xl font-bold text-white text-center">
                  Business
                </h1>
                <h1 className="text-2xl font-bold text-white text-center">
                  Automation
                </h1>
              </a>
            </div>
            <div className="flex flex-col w-[15rem] h-[20rem]  items-center">
              <img
                className="w-[10rem] h-[10rem]"
                src="/assets/solutions/itst.png"
                alt=""
              />
              <h1 className="text-2xl font-bold text-orange-500 text-center">
                05
              </h1>
              <a href="/solutions">
                <h1 className="text-2xl font-bold text-white text-center">
                  IT Support
                </h1>
                <h1 className="text-2xl font-bold text-white text-center">
                  and Training
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[5rem] mx-[5%]">
        <h1 className="text-4xl font-bold py-[2rem]">Successful Projects</h1>
        <h2 className="pb-[2rem] text-orange-500 font-bold">
          Our success stories are a proof that our customers have benefited from
          our innovative solutions and services.
        </h2>

        <motion.div
          className="flex flex-wrap justify-between p-[2rem]"
          initial={{
            x: -400,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1, x: 0 
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] px-[3rem] py-[2rem] order-2 sm:order-2 ">
            <h1 className="text-orange-500 font-bold text-2xl">Security Camera with installation</h1>
            <p className="py-[2rem]">
              This project is a robust security solution.
               It includes the setup of high-definition cameras with features like night vision, motion detection, and remote access. 
              These cameras are installed at strategic locations for maximum coverage. The installation is done by professionals, ensuring seamless integration. 
              The system can be monitored remotely via a user-friendly interface. This project provides an effective security measure and peace of mind.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 px-[1rem] py-[2rem] order-1 sm:order-2">
            <img src="/assets/camera_2.jpg" alt="" className="w-[30rem] h-[20rem] rounded-[0.5rem]"/>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-between p-[2rem]"
          initial={{
            x: 400,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1, x: 0 
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] p-[5rem] order-2 sm:order-1">
            <img src="/assets/softwareDev.jpg" alt="" className="w-[30rem] h-[20rem] rounded-[0.5rem]"/>
          </div>
          <div className="items-center w-full sm:w-1/2 md:w-1/2 px-[2rem] px-[3rem] py-[2rem] mt-[3rem] order-1 sm:order-2">
            <h1 className="text-orange-500 font-bold text-2xl">Web based system Development</h1>
            <p className="py-[2rem]">
            The primary goal of the project was to create a user-friendly, efficient, and secure online platform. 
            The system was designed using cutting-edge web technologies, ensuring seamless navigation and robust functionality. 
            Rigorous testing was conducted to guarantee the system’s performance under various scenarios. 
            This successful project has significantly bolstered our standing in the field of web-based system development.
            </p>
          </div>
          
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-between p-[2rem]"
          initial={{
            x: -400,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1, x: 0 
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <div className="w-full sm:w-1/2 md:w-1/2 px-[2rem] px-[3rem] py-[2rem] order-2 sm:order-2 ">
            <h1 className="text-orange-500 font-bold text-2xl">Networking hardware supply</h1>
            <p className="py-[2rem]">
            The project’s primary objective was to upgrade the existing network infrastructure to support increased data traffic and provide enhanced security.
             We supplied state-of-the-art routers, switches, and firewalls, 
            ensuring optimal performance and robust security. The project was executed meticulously, adhering to the planned timeline and budget. 
            Post-implementation, the organization reported improved network speed, reduced downtime, and enhanced data security.
             This successful project has significantly boosted our reputation in the networking hardware supply industry.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 px-[1rem] py-[2rem] order-1 sm:order-2">
            <img src="/assets/services/netInf.jpg" alt="" className="w-[30rem] h-[20rem] rounded-[0.5rem]"/>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[5rem] mb-[10rem]">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="flex flex-wrap justify-evenly w-full my-[4rem]">
          <div className="mr-[2rem] ml-[4rem] w-[30rem]">
            <Map width={600} height={400} />
          </div>
          <div className="w-[30rem] ">
            <MessageForm />
          </div>
        </div>
      </div>
      <div className="Slider flex flex-col mb-[3rem]">
        <h1 className="text-4xl mb-[1rem] font-bold text-blueBlack">Partners:</h1>
        <PartnerSlider />
      </div>

      <div className="mt-[2rem]">
        <SocialMediaLink />
      </div>
      <Footer />
    </div>
  );
}


/* <div className="flex flex-wrap">
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-[3rem] my-[2rem] px-[2rem] py-[3rem]">
        <img
          src="./assets/vision.png"
          alt=""
          className="w-[6rem] h-[6rem] rounded-full border-[2px] rounded-full border-blue-200 p-[1rem]"
        />
        <h1 className="text-2xl items-center">Vision</h1>
        <p>
          To be a nationally and regionally prominent communications, security
          and ICT solutions provider known for high professional competency.
        </p>
      </div>
    </div> */

