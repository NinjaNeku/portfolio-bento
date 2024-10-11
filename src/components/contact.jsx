import React from "react";
import Arrow from "../assets/svg/ARROW.svg";

function Contact({ onOpenModal }) {
  return (
    <div
      className="w-[300px] h-[240px] px-4 pt-2 pb-4 bg-[#bf7961] rounded-[20px] flex-col justify-start items-end gap-[150px] inline-flex cursor-pointer"
      onClick={onOpenModal}
    >
      <div className="self-stretch justify-between items-end inline-flex">
        <div className="text-[#3c2f2a] text-[13px] font-light font-['Gilroy-Medium']">
          Press
          <br />
          Me! :3
        </div>
        <div className="w-[30px] h-[30px] relative">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="text-[#3c2f2a] text-[40px] font-medium font-['Gilroy']">
        Contact me
      </div>
    </div>
  );
}

export default Contact;
