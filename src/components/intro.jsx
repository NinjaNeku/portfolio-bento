import React from "react";
import flowerIcon from "../assets/svg/FLOWER-ICON.svg";

function Intro() {
  return (
    <div className="w-[700px] h-[470px] relative bg-[#b8514b] rounded-[20px] m-5">
      <img
        src={flowerIcon}
        alt="flower_icon"
        className="w-[119px] h-[119px] left-[24px] ml-[535px] top-[34px] absolute"
      />
      <div className="w-[670px] left-[24px] top-[180px] mt-[70px] absolute">
        {/* Manage line breaks using <br /> */}
        <span className="text-[#3c2f2a] text-[48px] font-['Gilroy-bold'] leading-[56px] block">
          Full-stack Web & App Dev
        </span>
        <span className="text-[#3c2f2a] text-[48px] font-light font-['Gilroy-light'] leading-[56px] block">
          with a passion for
        </span>
        <span className="text-[#3c2f2a] text-[48px] font-bold font-['Gilroy-bold'] leading-[56px] block">
          Figma designing
        </span>
      </div>
      <div className="w-[119px] h-[119px] left-[416px] top-[34px] absolute" />
    </div>
  );
}

export default Intro;
