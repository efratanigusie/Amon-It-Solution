import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaLink = () => {
  return (
    <div className="flex flex-col mb-[5rem] ml-[3rem]">
      <h1 className="text-[1.5rem] font-bold mb-[1rem] ml-[1rem] text-blueBlack">
        Share this page on:
      </h1>
      <div className="flex flex-wrap justify-start">
        <div className="px-[1rem] bg-facebookblue ml-[2rem] rounded-[5px]">
          <a href="https://facebook.com">
            <span className="bg-facebookblue">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            Facebook
          </a>
        </div>
        <div className="px-[1rem] bg-linkedinblue ml-[2rem] rounded-[5px]">
          <a href="#">
            <span className="bg-linkedinblue">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            Linked in
          </a>
        </div>
        <div className="px-[1rem] bg-twitterblue ml-[2rem] rounded-[5px]">
          <a href="/">
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            Twitter
          </a>
        </div>
        <div className="px-[1rem] bg-telegramblue ml-[2rem] rounded-[5px]">
          <a href="/">
            <span>
              <FontAwesomeIcon icon={faTelegram} />
            </span>
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLink;
