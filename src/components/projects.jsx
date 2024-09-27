import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import workPic from "../assets/images/chair.png";

function Projects({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-lg text-[#D9D9D9]">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id} className="p-1 bg-[#F6E9D9]">
        <div
          className={`flex justify-between p-3 bg-[#b8514b] text-[#3c2f2a] ${
            isExpanded ? "rounded-t-lg" : "rounded-lg"
          } items-center cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          <span className="font-['Gilroy']">{item.label}</span>
          {icon}
        </div>

        {isExpanded && (
          <div className="bg-[#b8514b] p-4 rounded-b-lg h-[432px] flex flex-col">
            <img
              src={workPic}
              alt="Project Preview"
              className="w-full h-42 object-cover rounded-lg"
            />
            <div className="mt-2 border-t border-[#F6E9D9] flex-grow">
              <p className="text-[#D9D9D9] p-2">{item.content}</p>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="w-[380px] h-[770px] max-w-full p-1 pt-3 bg-[#F6E9D9] rounded-lg overflow-hidden border-transparent">
      <div className="h-full overflow-y-auto">{renderedItems}</div>
    </div>
  );
}

export default Projects;
