import React from "react";
import circleIcon from "../assets/svg/CIRCLE-ICON.svg";

function About() {
  return (
    <div className="bg-[#b8514b]  ml-5 p-6 rounded-[20px] w-[650px] h-[215px]">
      <img src={circleIcon} alt="circle_icon" className="w-[38px] h-[38px]" />
      <div className="text-xl font-light mt-4 leading-relaxed font-['Gilroy-medium']">
        Hey there! I’m a full-stack developer focused on building dynamic,
        user-centered digital experiences with a knack for translating creative
        visions from Figma into smooth, functional interfaces. Feel free to
        contact me for any collaboration ideas or projects.
      </div>
    </div>
  );
}

export default About;
