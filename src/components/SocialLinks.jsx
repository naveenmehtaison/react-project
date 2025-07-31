import React from "react";
import { socialLinks } from "../data";
import {
  SiLinkedin,
  SiLeetcode,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";

const iconMap = {
  SiLinkedin,
  SiLeetcode,
  SiInstagram,
  SiFacebook,
};
const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mr-4 ">
      {socialLinks.map(({ name, url, icon }) => {
        const Icon = iconMap[icon];
        return (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer">
            <Icon
              className="gap-5 rounded-full hover:shadow-lg lg:hover:shadow-lg lg:hover:shadow-blue-300 hover:shadow-blue-300"
              size={35}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
