import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import workPic from "../assets/images/chair.png";

function Projects({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0); // By default, the first project will be open

  // Handle item click and ensure one project is always open
  const handleClick = (index) => {
    setExpandedIndex(index); // Directly set the clicked index as the open project
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-lg text-[#D9D9D9]">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id} className="p-1 ml-2 bg-[#F6E9D9]">
        <div
          className={`flex justify-between p-3 bg-[#b8514b] text-[#3c2f2a] ${
            isExpanded ? "rounded-t-lg" : "rounded-lg"
          } items-center cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          <span className="font-['Gilroy']">{item.label}</span>
          {icon}
        </div>

        {/* Image and content only appear if this project is expanded */}
        {isExpanded && (
          <div className="bg-[#b8514b] p-4 rounded-b-lg h-[284px] flex flex-col">
            <img
              src={workPic}
              alt="Project Preview"
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="mt-2 border-t border-[#D9D9D9] flex-grow">
              <p className="text-[#D9D9D9] p-2">{item.content}</p>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="w-[380px] h-[620px] max-w-full p-1 bg-[#F6E9D9] rounded-lg shadow-lg overflow-hidden">
      <div className="h-full overflow-y-auto">{renderedItems}</div>
    </div>
  );
}

export default Projects;
