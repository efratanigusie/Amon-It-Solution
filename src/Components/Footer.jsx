import React from "react";
import {faGlobe, faPhoneAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="relative w-full h-[30rem]">
      <div className="flex flex-col justify-between p-[4rem] pb-[2rem] bg-gradient-to-br from-darkBlue to-blueBlack ">
        <div className="relative flex flex-col justify-between px-[4rem] py-[2rem]">
         <hr className="w-[40%] mx-[25%] h-[0.75rem] bg-orange-500 rounded-[5px]" />
         <div className="flex flex-wrap justify-between my-[2rem]">
           <div className="flex flex-row justify-between">
             <img
               src="assets/logo.jpg"
               alt=""
               className="w-[8rem] h-[8rem] ml-[30%] rounded-full"
             />
             <div className="ml-[2rem] flex flex-col justify-start pt-[2rem]">
             <h1 className="text-2xl font-bold text-white" >Amon It</h1>
             <h1 className="text-2xl font-bold text-white">Solution</h1>
             </div>
            
           </div>
           <div className="flex flex-col justify-between w-[30%] h-full">
             <h1 className="text-2xl text-orange-500 font-bold text-center mb-[2rem]">Links</h1>
             <div className="flex flex-wrap justify-evenly align-between">
               <ul className="h-full">
                 <li><a className="text-white" href="/">Home</a></li>
                 <li><a className="text-white" href="/about">About us</a></li>
                 <li><a className="text-white" href="/service">Services</a></li>
                 </ul>
                 <ul>
                 <li><a className="text-white" href="/contact">Contact us</a></li>
                 <li><a className="text-white" href="/solution">Solutions</a></li>
                 <li><a className="text-white" href="/tesimony">Testimony</a></li>
               </ul>
             </div>
              
           </div>

           <div className="flex flex-col justify-between ">
             <h1 className="text-2xl text-orange-500 font-bold mb-[2rem]">Contact Us </h1>
             <div className="flex flex-wrap justify-between  mt-[1rem]">
               <FontAwesomeIcon
                 icon={faHome}
                 className="text-white w-[2rem] h-[2rem] "
               />
               <h1 className="text-white">5 kilo, Radical Building</h1>
             </div>

             <div className="flex flex-wrap justify-between mt-[1rem]">
               <FontAwesomeIcon icon={faPhoneAlt} className="text-white w-[2rem] h-[2rem] "/>
               <div>
               <h1 className="text-white">0911581947/ 0926312051</h1>
               <h1 className="text-white">0111542690</h1>
               </div>
              
             </div>

             <div className="flex flex-wrap justify-between mt-[1rem]">
               <FontAwesomeIcon icon={faGlobe} className="text-white w-[2rem] h-[2rem] "/>
               <h1 className="text-white">5 kilo, Radical Building</h1>
             </div>
           </div>
         </div>
         <hr className="w-[90%] mx-[5%] mt-[1rem] h-[1rem] bg-orange-500 rounded-[2px]" />
        <h1 className="text-2xl font-bold text-white mx-[5%]">
          SECURITY IS OUR IDENTITY
        </h1>
        </div>
      </div>

      <div className="absolute top-[2rem] left-[2rem] transform -translate-x-2 -translate-y-2 flex flex-wrap">
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-[2rem] right-[2rem] transform translate-x-2 translate-y-2 flex flex-wrap">
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
        <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
          <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="absolute top-[5.5rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[6rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[6.5rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[7rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[7.5rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[8rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[8.5rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[9rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[9.5rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[10rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute top-[10.5rem] right-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[3rem] h-[3rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="absolute -bottom-[5.5rem] left-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[8rem] h-[8rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute -bottom-[6rem]  left-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[8rem] h-[8rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute -bottom-[6.5rem] left-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[8rem] h-[8rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        <div className="absolute -bottom-[7rem] left-4 transform translate-x-2 translate-y-2 flex flex-wrap">
          <div className="w-[8rem] h-[8rem] rounded-full flex justify-between ml-[4px]">
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
            <div className="w-1 h-1 bg-orange rounded-full pl-[0.5px]"></div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import {faGlobe, faPhoneAlt, faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Footer = () => {
//   return (
//     <div className="relative">
//       <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full ">
//     <img src="/assets/Amon/About/netInfra.jpg" alt="" className="w-full h-full object-cover" />
//   </div>
//   <div className="absolute top-0 bottom-0 right-0 left-0 bg-darkBlue opacity-25"></div>
//       <div className="relative flex flex-col justify-between px-[4rem] py-[2rem]">
//         <hr className="w-[40%] mx-[25%] h-[0.75rem] bg-orange rounded-[5px]" />
//         <div className="flex flex-wrap justify-between my-[2rem]">
//           <div className="flex flex-row justify-between">
//             <img
//               src="assets/logo.jpg"
//               alt=""
//               className="w-[8rem] h-[8rem] ml-[30%] rounded-full"
//             />
//             <div className="ml-[2rem]">
//             <h1 className="text-2xl font-bold text-white" >Amon It</h1>
//             <h1 className="text-2xl font-bold text-white">Solution</h1>
//             </div>
            
//           </div>
//           <div className="flex flex-col justify-between w-[30%] h-full">
//             <h1 className="text-2xl text-orange-500 font-bold text-center mb-[2rem]">Links</h1>
//             <div className="flex flex-wrap justify-evenly align-between">
//               <ul className="h-full">
//                 <li><a className="text-white" href="/">Home</a></li>
//                 <li><a className="text-white" href="/about">About us</a></li>
//                 <li><a className="text-white" href="/service">Services</a></li>
//                 </ul>
//                 <ul>
//                 <li><a className="text-white" href="/contact">Contact us</a></li>
//                 <li><a className="text-white" href="/solution">Solutions</a></li>
//                 <li><a className="text-white" href="/tesimony">Testimony</a></li>
//               </ul>
//             </div>
              
//           </div>

//           <div className="flex flex-col justify-between ">
//             <h1 className="text-2xl text-orange-500 font-bold mb-[2rem]">Contact Us </h1>
//             <div className="flex flex-wrap justify-between  mt-[1rem]">
//               <FontAwesomeIcon
//                 icon={faHome}
//                 className="text-white w-[2rem] h-[2rem] "
//               />
//               <h1 className="text-white">5 kilo, Radical Building</h1>
//             </div>

//             <div className="flex flex-wrap justify-between mt-[1rem]">
//               <FontAwesomeIcon icon={faPhoneAlt} className="text-white w-[2rem] h-[2rem] "/>
//               <div>
//               <h1 className="text-white">0911581947/ 0926312051</h1>
//               <h1 className="text-white">0111542690</h1>
//               </div>
              
//             </div>

//             <div className="flex flex-wrap justify-between mt-[1rem]">
//               <FontAwesomeIcon icon={faGlobe} className="text-white w-[2rem] h-[2rem] "/>
//               <h1 className="text-white">5 kilo, Radical Building</h1>
//             </div>
//           </div>
//         </div>
//         <hr className="w-[90%] mx-[5%] h-[0.75rem] bg-orange rounded-[2px]" />
//         <h1 className="text-2xl font-bold text-white mx-[5%]">
//           SECURITY IS OUR IDENTITY
//         </h1>
//       </div>

//       <div className="absolute top-[2rem] left-[2rem] transform -translate-x-2 -translate-y-2 flex flex-wrap">
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//       </div>

//        <div className="absolute bottom-[2rem] right-[2rem] transform translate-x-2 translate-y-2 flex flex-wrap">
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//         <div className="w-4 h-4 bg-white rounded-full flex  flex-wrap justify-center items-center ml-[4px]">
//           <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
//         </div>
//       </div>
       
      
//     </div>
//   );
// };

// export default Footer;
