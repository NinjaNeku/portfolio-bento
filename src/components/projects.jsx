import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import workPic from "../assets/images/chair.png";

function Projects({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    if (expandedIndex === null && items.length > 0) {
      setExpandedIndex(0);
    }
  }, [expandedIndex, items]);

  const handleClick = (index) => {
    if (index !== expandedIndex) {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-[380px] bg-[#F6E9D9] rounded-lg overflow-hidden">
      <div className="space-y-2 p-2">
        {items.map((item, index) => {
          const isExpanded = index === expandedIndex;

          return (
            <motion.div
              key={item.id}
              layout
              transition={{
                layout: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              className={`overflow-hidden ${
                isExpanded ? "rounded-lg" : "rounded-lg"
              }`}
            >
              <motion.div
                className={`flex justify-between p-4 bg-[#b8514b] text-[#3c2f2a] ${
                  isExpanded ? "rounded-t-lg" : "rounded-lg"
                } items-center cursor-pointer`}
                onClick={() => handleClick(index)}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-['Gilroy'] text-lg">{item.label}</span>
                <motion.span
                  className="text-lg text-[#D9D9D9]"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
                </motion.span>
              </motion.div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={{
                      expanded: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-[#b8514b] overflow-hidden rounded-b-lg"
                  >
                    <div className="p-4">
                      <img
                        src={workPic}
                        alt="Project Preview"
                        className="w-full h-auto object-cover rounded-lg mb-4"
                      />
                      <p className="text-[#D9D9D9]">{item.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
