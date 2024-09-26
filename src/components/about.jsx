import React from "react";
import circleIcon from "../assets/svg/CIRCLE-ICON.svg";

function About() {
  return (
    <div className="bg-[#b8514b]  ml-5 p-6 rounded-[20px] w-[650px] h-[215px]">
      <img src={circleIcon} alt="circle_icon" className="w-[38px] h-[38px]" />
      <div className="text-xl font-light mt-4 leading-relaxed font-['Gilroy-medium']">
        Julia Huang is an innovative AI artist, renowned for blending
        cutting-edge technology with creative expression. Based in LA, she
        crafts unique digital art experiences accessible globally.
      </div>
    </div>
  );
}

export default About;
