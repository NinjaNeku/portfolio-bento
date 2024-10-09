import React from "react";

const HeaderBar = () => {
  return (
    <div className="w-min-[100px] h-[70px] px-6 bg-[#b8514b] rounded-[20px] flex items-center justify-between m-5">
      <div className="text-[#3c2f2a] text-xl font-['Gilroy']">
        <span className="font-['Gilroy-LightItalic']">AAYUSH </span>
        <span className="font-['Gilroy-bold']">GAUTAM</span>
      </div>
      <div className="flex space-x-8">
        <div className="text-[#3c2f2a] text-base font-light font-['Gilroy']">
          PROJECTS
        </div>
        <div className="text-[#3c2f2a] text-base font-light font-['Gilroy']">
          ABOUT
        </div>
        <div className="text-[#3c2f2a] text-base font-light font-['Gilroy']">
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
