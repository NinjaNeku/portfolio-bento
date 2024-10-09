import React from "react";
import { motion } from "framer-motion";
import HeaderBar from "./components/HeaderBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import pfImage from "./assets/images/pf_image.png";

const miscCardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      ease: "easeInOut",
    },
  },
};

const profileCardVaraints = {
  hidden: {
    x: -135,
    y: 70,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      delay: 1,
    },
  },
};

function App() {
  const items = [
    {
      id: "1",
      label: "First Title",
      content: "description of the first title",
    },
    {
      id: "2",
      label: "Second Title",
      content: "description of the second title",
    },
    {
      id: "3",
      label: "Third Title",
      content: "description of the third title",
    },
    {
      id: "4",
      label: "Fourth Title",
      content: "description of the fourth title",
    },
    {
      id: "5",
      label: "Fifth Title",
      content: "description of the fifth title",
    },
  ];

  return (
    <div className="bg-[#F6E9D9] min-h-screen w-full">
      <motion.div
        variants={miscCardVariants}
        initial="hidden"
        animate="visible"
      >
        <HeaderBar />
      </motion.div>
      <div className="flex mt-5 w-min-[100px]">
        <motion.div
          variants={miscCardVariants}
          initial="hidden"
          animate="visible"
          className="h-[800px]"
        >
          <Intro />
          <About />
        </motion.div>
        <div className="flex flex-col mt-2">
          <motion.div
            variants={profileCardVaraints}
            initial="hidden"
            animate="visible"
          >
            <img
              className="rounded-[20px] mt-2 mb-4 w-[330px] h-[476px]"
              src={pfImage}
              alt="profile_pic"
            />
          </motion.div>
          <motion.div
            variants={miscCardVariants}
            initial="hidden"
            animate="visible"
          >
            <Contact />
          </motion.div>
        </div>
        <motion.div
          variants={miscCardVariants}
          initial="hidden"
          animate="visible"
          className="ml-3"
        >
          <Projects items={items} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
