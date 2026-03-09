import React, { useState } from "react";
import Header from "../Components/Header";
import ImageSliderAuto from "../Components/ImageSliderAuto";
import Footer from "../Components/Footer";
import Map from "../Components/Map";
import SocialMediaLink from "../Components/SocialMedia";
import PartnerSlider from "../Components/PartnerSlide";



export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const recipient = 'amonict11@gmail.com'; // Recipient's email address
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${message}`;
  
    // Open the user's default email client
    window.open(mailtoLink, '_blank');
  
    // Reset the form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="overflow-hidden ">
      <Header />
      <div className="h-[15rem]"></div>
      <div className="bg-blueBlack">
        <ImageSliderAuto />
        <div className="flex flex-wrap mx-[5rem]">

          <div className="flex flex-col justify-center my-[2rem]">

            <div className="w-[30rem] flex flex-row">
              <div className="w-[10rem] h-[8rem]">
                {/* <FontAwesomeIcon icon={faMapMarkerAlt}/> */}
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl text-orange-500">Physical Address​ </h1>
                <p className="text-white">5 Killo AAiT Campus</p>
                <p className="text-white">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="w-[30rem] flex flex-row">
              <div className="w-[10rem] h-[8rem]">
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl  text-orange-500">Email Address​</h1>
                <p className="text-white">amonict11@gmail.com</p>
              </div>
            </div>

            <div className="w-[30rem] flex flex-row">
              <div className="w-[10rem] h-[8rem]">
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl  text-orange-500">Phone Numbers</h1>
                <p className="text-white">011 154 2690</p>
                <p className="text-white">+251 926 31 2051</p>
              </div>
            </div>

          </div>

          <div className="relative z-10 w-1/2 flex flex-col -mt-[5rem]">
            <form
              className=" w-[30rem] mx-auto p-4 bg-white "
              onSubmit={handleSubmit}
            >
              <h1 className="text-4xl font-bold mb-[2rem] text-blueBlack">Send a Message</h1>
              <div className="mb-4 ">
                <input
                  type="text"
                  placeholder="Name *"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address*"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject *"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Comment or Message *"
                  className="w-full border border-gray-300 p-2 rounded"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blueBlack hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex justify-start w-[10rem] text-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="my-[4rem] mx-[4rem]">
        <h1 className="text-3xl font-bold my-[2rem]">Visit Us:</h1>
        <Map width={1300} height={400} />
      </div>
      <div className="Slider flex flex-col mb-[3rem]">
        <h1 className="text-4xl mb-[1rem] font-bold text-blueBlack">Partners:</h1>
        <PartnerSlider/>
      </div>

      <div>
        <SocialMediaLink />
      </div>

      <Footer />
    </div>
  );
}
